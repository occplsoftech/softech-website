import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site.config';
import { BrandMark } from '../shared/brand-mark';
import { ContactDetails } from '../shared/contact-details';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, BrandMark, Icon, ContactDetails],
  template: `
    <footer class="foot on-dark">
      <div class="container">
        <div class="lead-row">
          <h2>Have a project in mind?</h2>
          <a class="btn btn--primary" routerLink="/contact" [queryParams]="{ type: 'custom-software' }">Start a Conversation <app-icon name="arrow" /></a>
        </div>

        <div class="top">
          <div class="about">
            <app-brand />
            <p class="tag-line">{{ tagline }}</p>
            <p class="blurb">Practical, scalable software products and custom business solutions.</p>
            <app-contact-details class="contact" />
          </div>
          <nav aria-label="Company">
            <h3>Company</h3>
            <ul>@for (n of nav; track n.path) { <li><a routerLink="{{ n.path }}">{{ n.label }}</a></li> }</ul>
          </nav>
          <nav aria-label="Products and solutions">
            <h3>Explore</h3>
            <ul>
              <li><a routerLink="/products/logistics">Courier &amp; Logistics Software</a></li>
              <li><a routerLink="/solutions">Custom Software</a></li>
              <li><a routerLink="/contact" [queryParams]="{ type: 'product-demo' }">Request a Demo</a></li>
            </ul>
          </nav>
        </div>

        <div class="bottom">
          <small>© {{ year }} {{ name }}. All rights reserved.</small>
          <ul class="legal">
            <li><a routerLink="/privacy">Privacy Policy</a></li>
            <li><a routerLink="/terms">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div class="ghost" aria-hidden="true">OCCPL</div>
    </footer>
  `,
  styles: `
    .foot { position: relative; overflow: hidden; background: var(--navy); color: #b9bce6; padding-top: 80px;
      background: radial-gradient(60% 50% at 80% 0%, rgb(99 102 241 / 22%), transparent 70%), var(--navy); }
    .foot::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #818cf8, #E11D48, transparent); }
    .lead-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; padding-bottom: 56px; margin-bottom: 56px; border-bottom: 1px solid var(--line-dark); }
    .lead-row h2 { color: #fff; font-size: clamp(2rem, 4.4vw, 3.4rem); margin: 0; letter-spacing: -0.04em; }
    .top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; padding-bottom: 56px; }
    app-brand { color: #fff; }
    .tag-line { color: #fff; font: 700 1.05rem var(--font-head); margin: 18px 0 6px; }
    .blurb { max-width: 36ch; margin: 0; }
    .contact { margin-top: 18px; font-size: 0.9375rem; --contact-link: #fda4af; }
    h3 { font: 600 0.8125rem var(--font-body); letter-spacing: 0.1em; text-transform: uppercase; color: #fff; margin-bottom: 16px; }
    li { margin-bottom: 10px; }
    a:not(.btn) { color: #b9bce6; text-decoration: none; transition: color 0.15s; &:hover { color: #fff; } }
    .bottom { position: relative; z-index: 1; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-block: 24px; border-top: 1px solid var(--line-dark); }
    .legal { display: flex; gap: 20px; li { margin: 0; } }
    .ghost { font: 800 clamp(5rem, 20vw, 18rem)/0.78 var(--font-head); letter-spacing: -0.06em; text-align: center; margin-top: -10px; padding-bottom: 0; color: transparent; -webkit-text-stroke: 1px rgb(255 255 255 / 9%); user-select: none; transform: translateY(18%); }
    @media (max-width: 720px) { .top { grid-template-columns: 1fr; } }
  `,
})
export class SiteFooter {
  protected readonly year = new Date().getFullYear();
  protected readonly nav = SITE.nav;
  protected readonly name = SITE.name;
  protected readonly tagline = SITE.tagline;
}
