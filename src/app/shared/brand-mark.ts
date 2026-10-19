import { Component, input } from '@angular/core';

/** OCCPL SOFTECH logo mark (on a white tile so it reads on dark surfaces) + wordmark. */
@Component({
  selector: 'app-brand',
  template: `
    <img class="mark" src="logo-mark.png" alt="" width="40" height="40" />
    @if (!markOnly()) {
      <span class="word"><strong>OCCPL</strong><span>SOFTECH</span></span>
    }
  `,
  styles: `
    :host { display: inline-flex; align-items: center; gap: 10px; }
    .mark { width: 40px; height: 40px; flex: none; border-radius: 12px; background: #fff; padding: 3px; object-fit: contain; }
    .word { font: 800 1.25rem/1 var(--font-head); letter-spacing: 0.02em; color: inherit; display: inline-flex; gap: 5px; }
    .word span { font-weight: 500; opacity: 0.72; }
    strong { letter-spacing: 0.08em; }
    @media (max-width: 420px) {
      :host { gap: 8px; }
      .mark { width: 34px; height: 34px; }
      .word { font-size: 1rem; gap: 4px; }
    }
    @media (max-width: 340px) {
      .mark { width: 30px; height: 30px; border-radius: 9px; }
      .word { font-size: 0.875rem; }
    }
  `,
})
export class BrandMark {
  readonly markOnly = input(false);
}
