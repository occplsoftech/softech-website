import { Injectable, inject } from '@angular/core';
import { ConfigService } from './config.service';
import { ENQUIRY_TYPES, EnquiryType } from './site.config';

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
 * success ONLY on a 2xx response. The body follows the OCCPL platform's public lead intake
 * (`POST /api/v1/public/leads`, see README "Contact form"); on the server, Caddy forwards
 * `/api/leads` there, so the browser only ever talks to this site.
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
        body: JSON.stringify(toLead(payload)),
      });
      if (res.ok) return { ok: true };
      if (res.status === 429) return { ok: false, reason: 'rate-limited' };
      // 400/422: the platform refused the details. Anything else (404, 5xx, proxy errors) is our side.
      return { ok: false, reason: res.status === 400 || res.status === 422 ? 'rejected' : 'network' };
    } catch {
      return { ok: false, reason: 'network' };
    }
  }
}

/** Maps the form onto the platform's public lead body. Optional fields are left out when empty. */
function toLead(p: EnquiryPayload) {
  const interest = ENQUIRY_TYPES.find((t) => t.value === p.enquiryType)?.label;
  return {
    companyName: p.company,
    contactName: p.fullName,
    email: p.email,
    ...(p.phone ? { phone: p.phone } : {}),
    ...(interest ? { productInterest: interest } : {}),
    message: p.message,
  };
}
