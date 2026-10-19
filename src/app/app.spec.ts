import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { ENQUIRY_TYPES } from './core/site.config';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }));

  it('renders the shell with primary navigation', () => {
    const f = TestBed.createComponent(App);
    f.detectChanges();
    const el = f.nativeElement as HTMLElement;
    expect(el.querySelector('nav[aria-label="Primary"]')).toBeTruthy();
    expect(el.querySelector('main#main')).toBeTruthy();
  });

  it('defines every required route', () => {
    const paths = routes.map((r) => r.path);
    for (const p of ['', 'products', 'products/logistics', 'solutions', 'about', 'contact', 'privacy', 'terms']) {
      expect(paths).toContain(p);
    }
  });

  it('offers the five specified enquiry types', () => {
    expect(ENQUIRY_TYPES.map((t) => t.label)).toEqual(['Product Demo', 'Custom Software', 'SaaS Development', 'Integration', 'Other']);
  });
});
