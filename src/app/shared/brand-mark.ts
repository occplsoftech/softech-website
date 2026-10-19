import { Component, input } from '@angular/core';

/** OCCPL SOFTECH logo: the full lockup (mark and name), or just the mark. Defaults to the light version. */
@Component({
  selector: 'app-brand',
  template: `
    @if (markOnly()) {
      <img class="mark" src="logo-mark.png" alt="" width="40" height="40" />
    } @else {
      <img class="lockup lockup--color" src="logo-lockup.png" alt="OCCPL SOFTECH" width="157" height="60" />
      <img class="lockup lockup--light" src="logo-lockup-light.png" alt="OCCPL SOFTECH" width="157" height="60" />
    }
  `,
  styles: `
    :host { display: inline-flex; align-items: center; --logo-h: 60px; }
    .mark { width: 40px; height: 40px; flex: none; border-radius: 12px; background: #fff; padding: 3px; object-fit: contain; }
    /* Two versions of the same logo: full colour for light surfaces, and a light one (white and soft pink, transparent
       background) for dark and crimson surfaces. The surface chooses with --logo-color-display / --logo-light-display. */
    .lockup { height: var(--logo-h); width: auto; flex: none; object-fit: contain; padding: 0 6px; }
    .lockup--color { display: var(--logo-color-display, none); }
    .lockup--light { display: var(--logo-light-display, inline-block); }
  `,
})
export class BrandMark {
  readonly markOnly = input(false);
}
