import { animate, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, ElementRef, HostBinding, Inject, Injector, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { TrackingService } from "./tracking.service";

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

  const PANEL_HEADER_OFFSET = 64;

export abstract class AnimatedComponent implements AfterViewInit{
  @HostBinding('@routeAnimation') animateRoute = true;

  protected extraOffset: number = 0;

  protected trackingService: TrackingService;

  constructor(protected readonly injector: Injector){
    this.trackingService = injector.get(TrackingService);
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => window.scrollTo({top:0}),300);
  }

  onPanelOpened(panel: MatExpansionPanel) {
    const panelTitle = document.getElementById(panel._headerId).innerText;
    this.trackingService.track('panel_expanded', panelTitle,'USER_ACTION');
    setTimeout(() => {
      const top = panel._body.nativeElement.getBoundingClientRect().top;
      const toolbarOffset = window.outerWidth < 599 ? 56 :  window.outerWidth < 900 ? 64 : 100;
      window.scrollTo({
        top: top + window.scrollY - toolbarOffset - PANEL_HEADER_OFFSET - this.extraOffset,
        behavior: 'smooth'
      });
    }, 300);
  }
}