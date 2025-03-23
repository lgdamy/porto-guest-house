import { animate, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, ElementRef, HostBinding, ViewChild } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";

export const slideInOut = trigger('routeAnimation', [
    transition(':enter', [
      style({transform: 'translateY(-100%)', opacity: 0}),
      animate('300ms 300ms ease-out', style({transform: 'translateY(0)', opacity: 1}))
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0}))
    ])
  ]);

export const fadeInOut = trigger('routeAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s 0.3s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0.3s', style({ opacity: 0 }))
    ])
  ]);

export abstract class AnimatedComponent implements AfterViewInit{
  @HostBinding('@routeAnimation') animateRoute = true;
  @ViewChild('expansionPanel', { static: false }) expansionPanel: ElementRef;
  
  ngAfterViewInit(): void {
    setTimeout(() => window.scrollTo({top:0}),300);
  }

  onPanelOpened(panel: MatExpansionPanel) {
    setTimeout(() => {
      const top = panel._body.nativeElement.getBoundingClientRect().top;
      const offset = window.outerWidth < 599 ? 120 :  window.outerWidth < 900 ? 130 : 160;
      window.scrollTo({
        top: top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }, 300);
  }
}