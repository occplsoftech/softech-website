import { Component, OnInit, inject, input, signal } from '@angular/core';
import { ConfigService } from '../../core/config.service';
import { EnquiryForm } from '../../shared/enquiry-form';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-contact',
  imports: [PageHero, EnquiryForm],
  template: `
    <app-page-hero eyebrow="Contact" title="Let's Build Something That Works for Your Business." lead="Tell us about your operational challenges or software requirements. We'll discuss the right approach for your business." />

    <section class="section">
      <div class="container grid-2">
        <aside>
          <h2>What happens next</h2>
          <ol class="next">
            <li><strong>We read your enquiry.</strong> A member of the team reviews what you have sent.</li>
            <li><strong>We reply to you.</strong> We will respond at the email address you provide to discuss next steps.</li>
            <li><strong>We talk it through.</strong> For product demos, we arrange a walkthrough. For projects, we start with discovery.</li>
          </ol>
          @if (email()) {
            <p class="direct">Prefer email? Write to <a [href]="'mailto:' + email()">{{ email() }}</a>.</p>
          }
        </aside>
        <app-enquiry-form uid="contact" source="contact" [type]="type()" />
      </div>
    </section>
  `,
  styles: `
    .grid-2 { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(28px, 5vw, 72px); align-items: start; }
    h2 { font-size: 1.5rem; }
    .next { list-style: none; padding: 0; counter-reset: s; }
    .next li { counter-increment: s; position: relative; padding: 0 0 22px 52px; }
    .next li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--grad); color: #fff; font: 700 0.9rem var(--font-head); }
    .next strong { display: block; color: var(--ink); }
    .direct { margin-top: 8px; }
    @media (max-width: 900px) { .grid-2 { grid-template-columns: 1fr; } }
  `,
})
export class ContactPage implements OnInit {
  /** Bound from `?type=` via router input binding. */
  readonly type = input<string | undefined>();
  protected readonly email = signal('');
  private readonly config = inject(ConfigService);

  ngOnInit(): void {
    this.config.load().then((c) => this.email.set(c.contactEmail));
  }
}
