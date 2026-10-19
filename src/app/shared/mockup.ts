import { Component, input } from '@angular/core';

export type MockupVariant = 'dashboard' | 'shipments' | 'loadsheet';

/**
 * CSS-built interface mockup. These are illustrations, NOT product screenshots, and every
 * place they appear carries a caption saying so. Swap in real screenshots via the `src` field
 * in `logistics.content.ts` when available.
 */
@Component({
  selector: 'app-mockup',
  template: `
    <div class="win" role="img" [attr.aria-label]="label()">
      <div class="chrome"><i></i><i></i><i></i><span></span></div>
      <div class="body">
        <aside aria-hidden="true">
          <b></b>
          @for (n of [1, 2, 3, 4, 5, 6]; track n) { <span [class.on]="n === active()"></span> }
        </aside>
        <div class="main" aria-hidden="true">
          @switch (variant()) {
            @case ('dashboard') {
              <div class="kpis">
                @for (k of kpis; track k.l) {
                  <div class="kpi">
                    <small>{{ k.l }}</small>
                    <strong>{{ k.v }}</strong>
                    <svg viewBox="0 0 60 18" preserveAspectRatio="none"><polyline [attr.points]="k.p" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </div>
                }
              </div>
              <div class="split">
                <div class="panel">
                  <div class="ph"><b>Shipments this week</b><span class="pill-s">7 days</span></div>
                  <svg class="area" viewBox="0 0 300 110" preserveAspectRatio="none">
                    <defs><linearGradient id="mk-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E11D48" stop-opacity=".35" /><stop offset="1" stop-color="#E11D48" stop-opacity="0" /></linearGradient></defs>
                    <g stroke="#eef0f5"><path d="M0 28H300M0 56H300M0 84H300" /></g>
                    <path d="M0 88 C30 80 45 60 75 64 S120 86 150 52 S210 20 235 36 S280 14 300 8 V110 H0Z" fill="url(#mk-a)" />
                    <path d="M0 88 C30 80 45 60 75 64 S120 86 150 52 S210 20 235 36 S280 14 300 8" fill="none" stroke="#E11D48" stroke-width="2.4" stroke-linecap="round" />
                    <path d="M0 98 C40 92 70 84 110 88 S190 66 230 72 S280 58 300 52" fill="none" stroke="#312E81" stroke-width="2" stroke-dasharray="4 4" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="panel">
                  <div class="ph"><b>Status</b></div>
                  <div class="donut"><i></i></div>
                  @for (s of statuses; track s.t) { <p><i [class]="s.c"></i><span>{{ s.t }}</span></p> }
                </div>
              </div>
            }
            @case ('shipments') {
              <div class="toolbar"><span class="search"></span><span class="pill"></span></div>
              <div class="table">
                <div class="row head"><span>Tracking no.</span><span>Route</span><span>Status</span></div>
                @for (r of rows; track r.id) {
                  <div class="row"><span class="mono">{{ r.id }}</span><span>{{ r.route }}</span><span class="chip" [class]="r.c">{{ r.s }}</span></div>
                }
              </div>
            }
            @case ('loadsheet') {
              <div class="route">
                <div class="stop"><i></i><span>Origin branch</span></div>
                <div class="line"></div>
                <div class="stop"><i class="hub"></i><span>Hub</span></div>
                <div class="line"></div>
                <div class="stop"><i></i><span>Destination</span></div>
              </div>
              <div class="table">
                <div class="row head"><span>Shipment</span><span>Destination</span><span>Loaded</span></div>
                @for (r of rows.slice(0, 4); track r.id) {
                  <div class="row"><span class="mono">{{ r.id }}</span><span>{{ r.route.split(' → ')[1] }}</span><span class="chip ok">Scanned</span></div>
                }
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './mockup.scss',
})
export class Mockup {
  readonly variant = input<MockupVariant>('dashboard');
  readonly label = input('Illustrative interface mockup');
  protected readonly kpis = [
    { l: 'Booked', v: '248', p: '0,14 10,11 20,13 30,7 40,9 50,4 60,2' },
    { l: 'In transit', v: '96', p: '0,10 10,12 20,8 30,9 40,5 50,7 60,4' },
    { l: 'Out for delivery', v: '41', p: '0,12 10,9 20,11 30,6 40,8 50,5 60,6' },
    { l: 'Delivered', v: '187', p: '0,15 10,13 20,12 30,9 40,7 50,4 60,1' },
  ];
  protected readonly statuses = [
    { t: 'Booked', c: 'b' },
    { t: 'At hub', c: 'i' },
    { t: 'Out for delivery', c: 'a' },
    { t: 'Delivered', c: 'g' },
  ];
  protected readonly rows = [
    { id: 'SAMPLE-0001', route: 'City A → City B', s: 'Booked', c: 'b' },
    { id: 'SAMPLE-0002', route: 'City A → City C', s: 'In transit', c: 'i' },
    { id: 'SAMPLE-0003', route: 'City B → City D', s: 'At hub', c: 'i' },
    { id: 'SAMPLE-0004', route: 'City C → City A', s: 'Delivered', c: 'ok' },
    { id: 'SAMPLE-0005', route: 'City D → City B', s: 'Out for delivery', c: 'b' },
  ];
  protected active(): number {
    return { dashboard: 1, shipments: 2, loadsheet: 3 }[this.variant()];
  }
}
