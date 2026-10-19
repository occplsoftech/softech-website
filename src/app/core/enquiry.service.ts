import { Injectable, inject } from '@angular/core';
import { ConfigService } from './config.service';
import { EnquiryType } from './site.config';

export interface EnquiryPayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
  consent: true;
  /** Page the form was submitted from, for lead attribution. */
  source: string;
  /** ISO timestamp the visitor ticked the consent box. */
  consentAt: string;
  /** Cloudflare Turnstile token; only present when a site key is configured. */
  turnstileToken?: string;
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'rate-limited' | 'rejected' | 'network' };

/**
 * Backend integration boundary. POSTs JSON to `enquiryEndpoint` from config.json and reports
 * success ONLY on a 2xx response. See README "Contact form" for the server-side contract.
 */
@Injectable({ providedIn: 'root' })
export class EnquiryService {
  private readonly config = inject(ConfigService);

  async submit(payload: EnquiryPayload): Promise<SubmitResult> {
    const { enquiryEndpoint } = await this.config.load();
    if (!enquiryEndpoint) return { ok: false, reason: 'not-configured' };
    try {
      const res = await fetch(enquiryEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) return { ok: true };
      return { ok: false, reason: res.status === 429 ? 'rate-limited' : 'rejected' };
    } catch {
      return { ok: false, reason: 'network' };
    }
  }
}
