import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SITE } from './site.config';

export interface PageSeo {
  title: string;
  description: string;
  /** Pages we don't want indexed (e.g. 404). */
  noindex?: boolean;
}

const DEFAULT_TITLE = `${SITE.name} | Software Products & Custom Business Solutions`;

/** Applies title, description, canonical and social tags from each route's `data.seo`. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  init(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const seo = this.deepest(this.router.routerState.snapshot.root).data['seo'] as PageSeo | undefined;
      this.apply(seo, (e as NavigationEnd).urlAfterRedirects);
    });
  }

  private deepest(r: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    return r.firstChild ? this.deepest(r.firstChild) : r;
  }

  private apply(seo: PageSeo | undefined, url: string): void {
    const path = url.split(/[?#]/)[0];
    const full = !seo ? DEFAULT_TITLE : path === '/' ? seo.title : `${seo.title} | ${SITE.name}`;
    const description = seo?.description ?? '';
    const canonical = SITE.url + (path === '/' ? '/' : path.replace(/\/$/, ''));

    this.title.setTitle(full);
    this.set('name', 'description', description);
    this.set('name', 'robots', seo?.noindex ? 'noindex,nofollow' : 'index,follow');
    this.set('property', 'og:type', 'website');
    this.set('property', 'og:site_name', SITE.name);
    this.set('property', 'og:title', full);
    this.set('property', 'og:description', description);
    this.set('property', 'og:url', canonical);
    this.set('property', 'og:image', `${SITE.url}/og-image.png`);
    this.set('name', 'twitter:card', 'summary_large_image');
    this.set('name', 'twitter:title', full);
    this.set('name', 'twitter:description', description);
    this.set('name', 'twitter:image', `${SITE.url}/og-image.png`);

    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = canonical;
  }

  private set(attr: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attr]: key, content } as { name: string; content: string });
  }
}
