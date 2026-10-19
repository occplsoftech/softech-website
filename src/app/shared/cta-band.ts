import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-band',
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="container">
        <div class="band dark">
          <div>
            <h2 class="h-section">{{ title() }}</h2>
            <p class="lead">{{ lead() }}</p>
          </div>
          <a class="btn btn--primary" routerLink="/contact" [queryParams]="{ type: type() }">{{ cta() }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .section { padding-top: 0; }
    .band {
      display: flex; gap: 32px; align-items: center; justify-content: space-between; flex-wrap: wrap;
      padding: clamp(32px, 5vw, 56px); border-radius: var(--r-lg); color: #d0d2f0;
      background: radial-gradient(70% 140% at 100% 0%, rgb(255 255 255 / 16%), transparent 60%), linear-gradient(120deg, #E11D48, #BE123C 65%, #9F1239);
    }
    h2 { color: #fff; font-size: clamp(1.6rem, 3vw, 2.3rem); margin-bottom: 0.3em; max-width: 24ch; }
    .lead { margin: 0; max-width: 52ch; color: rgb(255 255 255 / 92%); }
    .band .btn--primary { background: #fff; color: var(--crimson); box-shadow: 0 10px 28px -10px rgb(0 0 0 / 45%); }
  `,
})
export class CtaBand {
  readonly title = input("Let's talk about your project");
  readonly lead = input('Tell us what you are trying to solve and we will discuss the right approach.');
  readonly cta = input('Discuss Your Project');
  readonly type = input('other');
}
