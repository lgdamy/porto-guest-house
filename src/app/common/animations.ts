import { animate, style, transition, trigger } from "@angular/animations";
import { Directive, HostBinding, OnInit } from "@angular/core";

export const slideInOut = trigger('routeAnimation', [
    transition(':enter', [
      style({ transform: 'translateY(-120%)', opacity: 0 }),
      animate('0.3s 0.1s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ transform: 'translateY(-120%)', opacity: 0 }))
    ])
  ]);

export const fadeInOut = trigger('routeAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s 0.1s ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0.3s ease-out', style({ opacity: 0 }))
    ])
  ]);

@Directive()
export abstract class AnimatedComponent  implements OnInit{
  transitionComplete = false;
  @HostBinding('@routeAnimation') animateRoute = true;

  ngOnInit(): void {
    setTimeout(() => this.transitionComplete = true, 500)
  }
}