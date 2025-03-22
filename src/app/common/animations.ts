import { animate, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, ChangeDetectorRef, ElementRef, HostBinding, Optional, ViewChild } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { ContainerService } from "./container.service";

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
  @ViewChild('accordion', { static: false }) accordionRef: ElementRef;

  constructor(private readonly containerService? : ContainerService) {}

  private container : HTMLElement

  private readonly panelHeaderHeight = 64;
  protected addedOffset = 0;
  
  ngAfterViewInit(): void {
    this.containerService.getContainer().subscribe(ref => {
      this.container = ref.nativeElement;
    })
  }

  onPanelOpened(panel: MatExpansionPanel) {
    setTimeout(() => {
      console.log(this.addedOffset);
      const top = panel._body.nativeElement.getBoundingClientRect().top - this.container.getBoundingClientRect().top;
      this.container.scrollTo({
        top: this.container.scrollTop + top - this.panelHeaderHeight - this.addedOffset,
        behavior: 'smooth'
      });
    }, 300);
  }
}