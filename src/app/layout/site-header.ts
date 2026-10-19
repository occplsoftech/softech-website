import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { SITE } from '../core/site.config';
import { BrandMark } from '../shared/brand-mark';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, BrandMark, Icon],
  template: `
    <header class="wrap on-dark" [class.scrolled]="scrolled()">
      <div class="container">
        <div class="island">
          <a routerLink="/" class="logo" aria-label="OCCPL SOFTECH home"><app-brand /></a>

          <nav id="primary-nav" class="nav" [class.open]="open()" aria-label="Primary">
            <ul>
              @for (item of nav; track item.path) {
                <li>
                  <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.path === '/' }">{{ item.label }}</a>
                </li>
              }
            </ul>
            <a class="cta" routerLink="/contact" [queryParams]="{ type: 'custom-software' }">
              Discuss Your Project
              <span class="cta__arrow" aria-hidden="true"><app-icon name="arrow" /></span>
            </a>
          </nav>

          <button #toggle type="button" class="toggle" [attr.aria-expanded]="open()" aria-controls="primary-nav" (click)="open.set(!open())">
            <app-icon [name]="open() ? 'close' : 'menu'" />
            <span class="visually-hidden">{{ open() ? 'Close menu' : 'Open menu' }}</span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly nav = SITE.nav;
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  private readonly toggle = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');

  constructor() {
    inject(Router).events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.open.set(false));
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open()) {
      this.open.set(false);
      this.toggle().nativeElement.focus();
    }
  }
}
