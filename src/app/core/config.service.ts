import { Injectable } from '@angular/core';

export interface RuntimeConfig {
  /** Absolute URL or path that accepts a JSON POST. Empty = not configured. */
  enquiryEndpoint: string;
  /** Cloudflare Turnstile PUBLIC site key. Empty = widget disabled. */
  turnstileSiteKey: string;
  /** Optional public contact address shown on the contact page. */
  contactEmail: string;
}

const DEFAULTS: RuntimeConfig = { enquiryEndpoint: '', turnstileSiteKey: '', contactEmail: '' };

/** Loads `config.json` once (served from `public/`) so deploys can change it without a rebuild. */
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private cached?: Promise<RuntimeConfig>;

  load(): Promise<RuntimeConfig> {
    this.cached ??= fetch('config.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : {}))
      .then((j) => ({ ...DEFAULTS, ...j }) as RuntimeConfig)
      .catch(() => DEFAULTS);
    return this.cached;
  }
}
