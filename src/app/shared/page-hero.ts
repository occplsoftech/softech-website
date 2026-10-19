import { Component, input } from '@angular/core';
import { NetworkArt } from './network-art';

/** Dark, compact hero used at the top of every inner page. */
@Component({
  selector: 'app-page-hero',
  imports: [NetworkArt],
  template: `
    <section class="hero dark">
      <app-network-art class="net" uid="ph" /><div class="shape s2" aria-hidden="true"></div>
      <div class="container">
        <span class="eyebrow">{{ eyebrow() }}</span>
        <h1 class="h-display">{{ title() }}</h1>
        <p class="lead">{{ lead() }}</p>
        <div class="actions"><ng-content /></div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative; overflow: hidden; color: #ffe4e6;
      padding-block: calc(var(--header-h) + clamp(48px, 7vw, 96px)) clamp(48px, 7vw, 88px);
      background:
        radial-gradient(65% 95% at 85% 0%, rgb(49 46 129 / 60%), transparent 60%),
        radial-gradient(55% 85% at 0% 100%, rgb(76 5 25 / 55%), transparent 60%),
        linear-gradient(rgb(255 255 255 / 3.5%) 1px, transparent 1px) 0 0 / 56px 56px,
        linear-gradient(90deg, rgb(255 255 255 / 3.5%) 1px, transparent 1px) 0 0 / 56px 56px,
        var(--navy);
    }
    .shape { position: absolute; border-radius: 28%; border: 1px solid rgb(255 255 255 / 14%); transform: rotate(18deg); pointer-events: none; }
    .net { position: absolute; right: -4%; top: 0; bottom: 0; width: min(62%, 760px); opacity: 0.55; mask-image: linear-gradient(90deg, transparent, #000 35%); }
    .s1 { width: 420px; height: 420px; right: -80px; top: -120px; background: linear-gradient(145deg, rgb(99 102 241 / 30%), transparent 70%); }
    .s2 { width: 240px; height: 240px; right: 14%; bottom: -110px; background: linear-gradient(145deg, rgb(225 29 72 / 28%), transparent 70%); transform: rotate(-12deg); }
    .container { position: relative; }
    h1 { color: #fff; font-size: clamp(2.4rem, 5.2vw, 4.2rem); max-width: 17ch; }
    .lead { margin: 0; }
    .actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
    .actions:empty { display: none; }
  `,
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input.required<string>();
}
