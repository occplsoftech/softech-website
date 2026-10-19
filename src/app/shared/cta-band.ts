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
    .band {
      display: flex; gap: 32px; align-items: center; justify-content: space-between; flex-wrap: wrap;
      padding: clamp(32px, 5vw, 56px); border-radius: var(--r-lg); color: #d0d2f0;
      background: radial-gradient(70% 140% at 100% 0%, rgb(99 102 241 / 45%), transparent 60%), var(--navy);
    }
    h2 { color: #fff; font-size: clamp(1.6rem, 3vw, 2.3rem); margin-bottom: 0.3em; max-width: 24ch; }
    .lead { margin: 0; max-width: 52ch; }
  `,
})
export class CtaBand {
  readonly title = input("Let's talk about your project");
  readonly lead = input('Tell us what you are trying to solve and we will discuss the right approach.');
  readonly cta = input('Discuss Your Project');
  readonly type = input('other');
}
