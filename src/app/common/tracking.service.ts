import { Injectable } from '@angular/core';

declare var gtag : any;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { }

  track(eventName: string, eventDetails: string, eventCategory: string) {
    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventName,
      'value': eventDetails
    });
  }
}
