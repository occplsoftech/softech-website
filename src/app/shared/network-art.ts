import { Component, input } from '@angular/core';

interface Node { x: number; y: number; hub?: boolean }

/** Decorative animated logistics network: hubs, routes and parcels in motion. */
@Component({
  selector: 'app-network-art',
  template: `
    <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient [attr.id]="id + 'h'"><stop offset="0" stop-color="#fda4af" /><stop offset="1" stop-color="#E11D48" /></radialGradient>
        <linearGradient [attr.id]="id + 'l'" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E11D48" stop-opacity=".1" /><stop offset=".5" stop-color="#fda4af" stop-opacity=".7" /><stop offset="1" stop-color="#818cf8" stop-opacity=".1" /></linearGradient>
      </defs>
      @for (e of edges; track $index) {
        <path [attr.id]="id + 'e' + $index" [attr.d]="e" fill="none" stroke="rgb(165 180 252 / 18%)" stroke-width="1.2" />
        <path class="anim flow" [attr.d]="e" fill="none" [attr.stroke]="'url(#' + id + 'l)'" stroke-width="1.8" stroke-dasharray="6 14" [style.animation-delay.s]="$index * -0.7" />
      }
      @for (n of nodes; track $index) {
        @if (n.hub) {
          <circle class="anim pulse" [attr.cx]="n.x" [attr.cy]="n.y" r="9" fill="none" stroke="#fda4af" stroke-width="1.2" />
          <circle [attr.cx]="n.x" [attr.cy]="n.y" r="13" [attr.fill]="'url(#' + id + 'h)'" opacity=".95" />
          <circle [attr.cx]="n.x" [attr.cy]="n.y" r="4.5" fill="#fff" />
        } @else {
          <circle [attr.cx]="n.x" [attr.cy]="n.y" r="4.5" fill="#312E81" stroke="#fda4af" stroke-width="1.6" />
        }
      }
      @for (i of parcels; track i) {
        <circle class="anim" r="3.6" fill="#fff"><animateMotion [attr.dur]="(5 + i * 0.9) + 's'" repeatCount="indefinite" [attr.begin]="(i * -1.3) + 's'"><mpath [attr.href]="'#' + id + 'e' + i" /></animateMotion></circle>
      }
    </svg>
  `,
  styles: `
    :host { display: block; pointer-events: none; }
    svg { width: 100%; height: 100%; }
    .flow { animation: dash 2.6s linear infinite; }
    .pulse { transform-box: fill-box; transform-origin: center; animation: ping 3.2s ease-out infinite; }
    @keyframes dash { to { stroke-dashoffset: -40; } }
    @keyframes ping { 0% { transform: scale(1); opacity: 0.9; } 100% { transform: scale(3.4); opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .anim { display: none; } }
  `,
})
export class NetworkArt {
  /** Unique id prefix so several instances never share gradient/path ids. */
  readonly uid = input('na');
  protected get id(): string { return this.uid() + '-'; }

  protected readonly nodes: Node[] = [
    { x: 400, y: 250, hub: true }, { x: 170, y: 150, hub: true }, { x: 640, y: 120, hub: true },
    { x: 630, y: 390, hub: true }, { x: 200, y: 390, hub: true },
    { x: 60, y: 260 }, { x: 290, y: 50 }, { x: 520, y: 30 }, { x: 760, y: 250 }, { x: 440, y: 480 }, { x: 330, y: 330 }, { x: 80, y: 90 },
  ];
  protected readonly edges = [
    'M400 250 Q285 175 170 150', 'M400 250 Q520 150 640 120', 'M400 250 Q520 340 630 390', 'M400 250 Q290 350 200 390',
    'M170 150 Q110 190 60 260', 'M170 150 Q230 70 290 50', 'M640 120 Q580 60 520 30', 'M640 120 Q720 170 760 250',
    'M630 390 Q540 460 440 480', 'M200 390 Q260 370 330 330', 'M170 150 Q120 110 80 90', 'M200 390 Q310 460 440 480',
  ];
  protected readonly parcels = [0, 1, 2, 3, 6, 8];
}
