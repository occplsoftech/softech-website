import { Component, input } from '@angular/core';

/** OCCPL SOFTECH logo: the full lockup (mark and name), or just the mark. */
@Component({
  selector: 'app-brand',
  template: `
    @if (markOnly()) {
      <img class="mark" src="logo-mark.png" alt="" width="40" height="40" />
    } @else {
      <img class="lockup" src="logo-lockup.png" alt="OCCPL SOFTECH" width="157" height="60" />
    }
  `,
  styles: `
    :host { display: inline-flex; align-items: center; --logo-h: 60px; }
    .mark { width: 40px; height: 40px; flex: none; border-radius: 12px; background: #fff; padding: 3px; object-fit: contain; }
    /* The full logo has dark text, so it sits on a white tile to stay readable on the coloured header and footer. */
    .lockup { height: var(--logo-h); width: auto; flex: none; border-radius: 14px; background: #fff; padding: 5px 12px; object-fit: contain; }
  `,
})
export class BrandMark {
  readonly markOnly = input(false);
}
