import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    @if (eyebrow()) { <span class="eyebrow">{{ eyebrow() }}</span> }
    <h2 class="h-section">{{ title() }}</h2>
    @if (lead()) { <p class="lead">{{ lead() }}</p> }
  `,
  styles: `
    :host { display: block; margin-bottom: clamp(32px, 5vw, 56px); max-width: 760px; }
    :host(.center) { margin-inline: auto; text-align: center; }
    :host(.center) .lead { margin-inline: auto; }
    .lead { margin: 0; }
  `,
})
export class SectionHeading {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly lead = input('');
}
