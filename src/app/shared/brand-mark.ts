import { Component, input } from '@angular/core';

/** Geometric OCCPL SOFTECH mark (two stacked ascending chevrons) + wordmark. */
@Component({
  selector: 'app-brand',
  template: `
    <svg class="mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient [attr.id]="gid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#E11D48" />
          <stop offset="1" stop-color="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" [attr.fill]="'url(#' + gid + ')'" />
      <path d="M9 21l7-7 7 7" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 14l7-7 7 7" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    @if (!markOnly()) {
      <span class="word"><strong>OCCPL</strong><span>SOFTECH</span></span>
    }
  `,
  styles: `
    :host { display: inline-flex; align-items: center; gap: 10px; }
    .mark { width: 34px; height: 34px; flex: none; }
    .word { font: 800 1.25rem/1 var(--font-head); letter-spacing: 0.02em; color: inherit; display: inline-flex; gap: 5px; }
    .word span { font-weight: 500; opacity: 0.72; }
    strong { letter-spacing: 0.08em; }
  `,
})
export class BrandMark {
  readonly markOnly = input(false);
  private static n = 0;
  protected readonly gid = `occpl-g-${BrandMark.n++}`;
}
