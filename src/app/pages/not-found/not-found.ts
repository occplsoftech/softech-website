import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, PageHero],
  template: `
    <app-page-hero eyebrow="404" title="This page could not be found." lead="The link may be broken or the page may have moved.">
      <a class="btn btn--primary" routerLink="/">Back to home</a>
      <a class="btn btn--secondary" routerLink="/contact">Contact us</a>
    </app-page-hero>
  `,
})
export class NotFoundPage {}
