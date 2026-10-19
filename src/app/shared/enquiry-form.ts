import { Component, ElementRef, OnDestroy, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../core/config.service';
import { EnquiryPayload, EnquiryService } from '../core/enquiry.service';
import { ENQUIRY_TYPES, EnquiryType } from '../core/site.config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const MIN_FILL_MS = 3000;
const FAILURE_COPY = {
  'not-configured': 'Our enquiry service is not connected yet, so your message was not sent.',
  'rate-limited': 'Too many enquiries were sent from your connection. Please wait a few minutes and try again.',
  rejected: 'We could not accept your enquiry. Please check your details and try again.',
  network: 'We could not reach our server. Check your connection and try again.',
} as const;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

@Component({
  selector: 'app-enquiry-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './enquiry-form.html',
  styleUrl: './enquiry-form.scss',
})
export class EnquiryForm implements OnDestroy {
  /** Pre-selects the enquiry type (e.g. from `?type=product-demo`). Ignored if not a known value. */
  readonly type = input<string | undefined>();
  /** Identifies the page the lead came from. */
  readonly source = input('website');
  /** Unique element-id prefix so two forms on one page never collide. */
  readonly uid = input('enq');

  private readonly fb = inject(FormBuilder);
  private readonly enquiries = inject(EnquiryService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly config = inject(ConfigService);

  protected readonly types = ENQUIRY_TYPES;
  protected readonly status = signal<Status>('idle');
  protected readonly failure = signal('');
  protected readonly needsToken = signal(false);
  private renderedAt = Date.now();
  private token = '';
  private widgetId?: string;

  protected readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    company: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.maxLength(160), Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    phone: ['', [Validators.pattern(/^[+()\-.\s\d]{7,20}$/)]],
    enquiryType: ['product-demo' as EnquiryType, Validators.required],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(2000)]],
    consent: [false, Validators.requiredTrue],
    website: [''], // honeypot: real users never see or fill this
  });

  constructor() {
    effect(() => {
      const t = this.type();
      if (t && this.types.some((x) => x.value === t)) this.form.controls.enquiryType.setValue(t as EnquiryType);
    });
    this.initTurnstile();
  }

  ngOnDestroy(): void {
    if (this.widgetId) window.turnstile?.remove(this.widgetId);
  }

  protected id(name: string): string {
    return `${this.uid()}-${name}`;
  }

  protected error(name: keyof typeof this.form.controls): string {
    const c = this.form.controls[name];
    if (!c.touched || !c.errors) return '';
    const e = c.errors;
    switch (name) {
      case 'fullName': return e['required'] ? 'Enter your full name.' : 'Name must be at least 2 characters.';
      case 'company': return 'Enter your company name.';
      case 'email': return e['required'] ? 'Enter your work email.' : 'Enter a valid email address, like name@company.com.';
      case 'phone': return 'Enter a valid phone number, or leave this blank.';
      case 'enquiryType': return 'Choose an enquiry type.';
      case 'message':
        return e['required'] ? 'Tell us a little about your requirements.' : e['minlength'] ? `Please add a few more details (at least 20 characters, you have ${e['minlength'].actualLength}).` : 'Please keep this under 2000 characters.';
      case 'consent': return 'Please agree so we can contact you about this enquiry.';
      default: return '';
    }
  }

  protected async submit(): Promise<void> {
    if (this.status() === 'submitting') return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      setTimeout(() => this.host.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    const v = this.form.getRawValue();
    // Spam heuristics: a filled honeypot or an implausibly fast submit is treated as a failure, never a success.
    if (v.website || Date.now() - this.renderedAt < MIN_FILL_MS) {
      this.fail('Please take a moment to review your message, then submit again.');
      this.renderedAt = Date.now() - MIN_FILL_MS + 1500;
      return;
    }
    if (this.needsToken() && !this.token) {
      this.fail('Please complete the spam check below the form, then submit again.');
      return;
    }

    this.status.set('submitting');
    this.failure.set('');
    const payload: EnquiryPayload = {
      fullName: v.fullName.trim(),
      company: v.company.trim(),
      email: v.email.trim(),
      phone: v.phone.trim(),
      enquiryType: v.enquiryType,
      message: v.message.trim(),
      consent: true,
      consentAt: new Date().toISOString(),
      source: this.source(),
      ...(this.token ? { turnstileToken: this.token } : {}),
    };
    const result = await this.enquiries.submit(payload);
    if (result.ok) {
      this.status.set('success');
      this.form.reset({ enquiryType: v.enquiryType });
      queueMicrotask(() => this.host.nativeElement.querySelector<HTMLElement>('[data-result]')?.focus());
    } else {
      this.fail(FAILURE_COPY[result.reason]);
      this.resetToken();
    }
  }

  protected another(): void {
    this.status.set('idle');
    this.renderedAt = Date.now();
    this.resetToken();
  }

  private fail(message: string): void {
    this.failure.set(message);
    this.status.set('error');
  }

  private async initTurnstile(): Promise<void> {
    const { turnstileSiteKey } = await this.config.load();
    if (!turnstileSiteKey) return;
    this.needsToken.set(true);
    await new Promise<void>((resolve, reject) => {
      if (window.turnstile) return resolve();
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject();
      document.head.appendChild(s);
    }).catch(() => undefined);
    queueMicrotask(() => this.renderWidget(turnstileSiteKey));
  }

  private renderWidget(siteKey: string): void {
    const el = this.host.nativeElement.querySelector<HTMLElement>('[data-turnstile]');
    if (!el || !window.turnstile || this.widgetId) return;
    this.widgetId = window.turnstile.render(el, {
      sitekey: siteKey,
      callback: (t: string) => (this.token = t),
      'expired-callback': () => (this.token = ''),
    });
  }

  private resetToken(): void {
    this.token = '';
    if (this.widgetId) window.turnstile?.reset(this.widgetId);
  }
}
