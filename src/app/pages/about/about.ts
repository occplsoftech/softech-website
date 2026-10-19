import { EFFECTS } from '../../shared/effects';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [RouterLink, PageHero, SectionHeading, Icon, CtaBand, ...EFFECTS],
  template: `
    <app-page-hero eyebrow="About" title="Engineering-led software, built for business." lead="SKRA Tech builds software products and custom business solutions. We are a small development team focused on practical results." />

    <section class="section">
      <div class="container two">
        <div>
          <span class="eyebrow">Who we are</span>
          <h2 class="h-section">A product company that also builds for clients.</h2>
        </div>
        <div class="prose">
          <p>SKRA Tech develops software products and builds customised software for businesses. Our name stands for a simple loop: build the right thing, automate the work around it, and scale it as the business grows.</p>
          <p>We are an early-stage company and we prefer to be direct about where we are. We have delivered a courier and logistics management solution that is operating at a client business, and we are currently working on another logistics implementation. Our logistics software is the first product, and our brand is designed to hold more.</p>
        </div>
      </div>
    </section>

    <section class="section section--cloud">
      <div class="container">
        <app-section-heading eyebrow="How we work" title="Principles behind our software." />
        <div class="grid grid--3">
          @for (p of principles; track p.title) {
            <article class="card">
              <div class="card__icon"><app-icon [name]="p.icon" /></div>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two">
        <div>
          <span class="eyebrow">What's next</span>
          <h2 class="h-section">Growing the product line.</h2>
        </div>
        <div class="prose">
          <p>We will keep improving our logistics software based on how it is used, and take on custom projects where we can add real value. Over time we intend to launch additional products beyond logistics.</p>
          <p><a class="link-arrow" routerLink="/products">See our products</a></p>
        </div>
      </div>
    </section>

    <app-cta-band title="Let's talk about what you need." lead="Whether it is a product demo or a new build, we would like to hear about it." />
  `,
  styles: `
    .two { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(24px, 5vw, 72px); align-items: start; }
    .prose { max-width: none; } .prose p { font-size: 1.0625rem; }
    @media (max-width: 800px) { .two { grid-template-columns: 1fr; } }
  `,
})
export class AboutPage {
  protected readonly principles = [
    { icon: 'tag', title: 'Business first', text: 'We begin with the problem your business has, and choose technology to fit it.' },
    { icon: 'code', title: 'Engineering discipline', text: 'We write maintainable, tested software that can be supported for years.' },
    { icon: 'mail', title: 'Plain communication', text: 'You get clear updates, honest estimates and early notice of trade-offs.' },
  ];
}
