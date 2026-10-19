import { Component, OnInit, inject, signal } from '@angular/core';
import { ConfigService, RuntimeConfig } from '../core/config.service';

/** Public contact details from `config.json`. Renders nothing for fields that are not set. */
@Component({
  selector: 'app-contact-details',
  template: `
    @if (cfg(); as c) {
      @if (c.legalName) { <p class="legal-name">{{ c.legalName }}</p> }
      @if (c.address) { <address>{{ c.address }}</address> }
      @if (c.contactEmail) { <p><a [href]="'mailto:' + c.contactEmail">{{ c.contactEmail }}</a></p> }
      @if (c.phone) { <p><a [href]="'tel:' + phoneHref(c.phone)">{{ c.phone }}</a></p> }
    }
  `,
  styles: `
    :host { display: block; }
    p, address { margin: 0 0 6px; font-style: normal; }
    a { color: var(--contact-link, var(--crimson)); }
    .legal-name { font-weight: 600; }
  `,
})
export class ContactDetails implements OnInit {
  protected readonly cfg = signal<RuntimeConfig | null>(null);
  private readonly config = inject(ConfigService);

  ngOnInit(): void {
    this.config.load().then((c) => this.cfg.set(c));
  }

  protected phoneHref(p: string): string {
    return p.replace(/[^\d+]/g, '');
  }
}
