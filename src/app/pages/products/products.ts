import { EFFECTS } from '../../shared/effects';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productName } from '../../core/site.config';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { Mockup } from '../../shared/mockup';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-products',
  imports: [RouterLink, PageHero, Icon, Mockup, CtaBand, ...EFFECTS],
  template: `
    <app-page-hero eyebrow="Products" title="Software products built for real operations." lead="SKRA Tech is building a portfolio of software products. We are starting with logistics, where our first product is already in use." />

    <section class="section">
      <div class="container">
        <article class="product card">
          <div class="product__copy">
            <span class="tag">Available now</span>
            <h2 class="h-section">{{ name }}</h2>
            <p class="lead">Run bookings, branches and hubs, load sheets, delivery runs and proof of delivery from one system.</p>
            <ul class="check-list">
              <li>Shipment booking and tracking</li>
              <li>Branch and hub operations</li>
              <li>Load sheets, delivery runs and proof of delivery</li>
            </ul>
            <div class="actions">
              <a class="btn btn--primary" routerLink="/products/logistics">View product details</a>
              <a class="btn btn--secondary" routerLink="/contact" [queryParams]="{ type: 'product-demo' }">Request a Product Demo</a>
            </div>
          </div>
          <figure>
            <app-mockup variant="dashboard" label="Illustrative mockup of a logistics dashboard" />
            <figcaption>Illustrative mockup with sample data, not an actual product screenshot.</figcaption>
          </figure>
        </article>

        <article class="soon card">
          <div class="card__icon"><app-icon name="layers" /></div>
          <div>
            <h3>More products to come</h3>
            <p>Our brand is built to support software beyond logistics. When new products are ready, they will appear here. Looking for something specific? <a routerLink="/solutions">See our custom development services</a>.</p>
          </div>
        </article>
      </div>
    </section>

    <app-cta-band title="Want to see the logistics software in action?" lead="Tell us about your operation and we will arrange a walkthrough." cta="Request a Product Demo" type="product-demo" />
  `,
  styles: `
    .product { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: clamp(28px, 5vw, 64px); align-items: center; padding: clamp(24px, 4vw, 52px); }
    .product:hover { transform: none; }
    figure { margin: 0; } figcaption { margin-top: 14px; font-size: 0.8125rem; text-align: center; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
    .soon { display: flex; gap: 20px; align-items: flex-start; margin-top: 24px; background: var(--cloud); box-shadow: none; }
    .soon .card__icon { margin: 0; flex: none; } .soon h3 { margin-bottom: 6px; }
    @media (max-width: 900px) { .product { grid-template-columns: 1fr; } }
  `,
})
export class ProductsPage {
  protected readonly name = productName();
}
