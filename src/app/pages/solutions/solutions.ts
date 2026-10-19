import { EFFECTS } from '../../shared/effects';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SOLUTIONS } from '../../core/solutions.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-solutions',
  imports: [RouterLink, PageHero, Icon, CtaBand, ...EFFECTS],
  template: `
    <app-page-hero eyebrow="Solutions" title="A ready product, and engineering for everything else." lead="Our logistics software is an existing product. The other solutions are development services: we build them with you, around your business." />

    <section class="section">
      <div class="container list">
        @for (s of solutions; track s.id) {
          <article class="row" [id]="s.id">
            <header>
              <div class="card__icon"><app-icon [name]="s.icon" /></div>
              <span class="tag" [class.tag--muted]="s.kind === 'Capability'">{{ s.kind === 'Product' ? 'Existing product' : 'Development capability' }}</span>
              <h2>{{ s.title }}</h2>
            </header>
            <div>
              <p class="lead">{{ s.detail }}</p>
              <h3>A good fit when you have</h3>
              <ul class="check-list">
                @for (f of s.fits; track f) { <li>{{ f }}</li> }
              </ul>
              @if (s.link) {
                <a class="btn btn--primary" [routerLink]="s.link">View the product</a>
              } @else {
                <a class="btn btn--secondary" routerLink="/contact" [queryParams]="{ type: s.type }">Discuss this with us</a>
              }
            </div>
          </article>
        }
      </div>
    </section>

    <app-cta-band title="Not sure which fits?" lead="Describe the problem. We will tell you plainly whether we can help and how we would approach it." cta="Start a Conversation" />
  `,
  styles: `
    .list { display: flex; flex-direction: column; }
    .row { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr); gap: clamp(24px, 5vw, 72px); padding-block: 48px; border-top: 1px solid var(--line); scroll-margin-top: calc(var(--header-h) + 16px); }
    .row:first-child { border-top: 0; padding-top: 0; }
    h2 { font-size: clamp(1.5rem, 2.6vw, 2rem); margin: 0; }
    h3 { font-size: 1rem; margin-top: 1.6em; }
    .lead { margin-bottom: 0; }
    .btn { margin-top: 24px; }
    @media (max-width: 800px) { .row { grid-template-columns: 1fr; } }
  `,
})
export class SolutionsPage {
  protected readonly solutions = SOLUTIONS;
}
