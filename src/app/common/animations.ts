import { animate, style, transition, trigger } from "@angular/animations";
import { Directive, HostBinding } from "@angular/core";

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

@Directive()
export abstract class AnimatedComponent{
  @HostBinding('@routeAnimation') animateRoute = true;

}