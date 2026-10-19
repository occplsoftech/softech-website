import { Directive, ElementRef, afterNextRender, inject, signal } from '@angular/core';

/**
 * Fade/slide-in on scroll. Only arms elements that start below the fold, so content already
 * in view never flashes, and prerendered HTML is fully visible without JavaScript.
 */
@Directive({
  selector: '[appReveal], .card, .b, .step, .proof li, .why__list li, .flow li, .faqs details, .pills li',
  host: { '[class.rv]': 'armed()', '[class.rv--in]': 'shown()', '[style.transition-delay.ms]': 'delay' },
})
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected readonly armed = signal(false);
  protected readonly shown = signal(false);
  protected delay = 0;

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (this.el.getBoundingClientRect().top < innerHeight * 0.92) return;
      const idx = this.el.parentElement ? Array.prototype.indexOf.call(this.el.parentElement.children, this.el) : 0;
      this.delay = Math.min(idx, 5) * 80;
      this.armed.set(true);
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            this.shown.set(true);
            io.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      io.observe(this.el);
    });
  }
}

/** Cursor-following glow on cards (pure CSS does the painting, this only feeds --mx/--my). */
@Directive({
  selector: '.card, .b:not(.b--hero)',
  host: { class: 'spot', '(pointermove)': 'move($event)' },
})
export class Spotlight {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  protected move(e: PointerEvent): void {
    const r = this.el.getBoundingClientRect();
    this.el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    this.el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}

export const EFFECTS = [Reveal, Spotlight] as const;
