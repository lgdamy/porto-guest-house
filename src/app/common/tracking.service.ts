import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var gtag : any;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private readonly router: Router) {
  }

  track(eventName: string, eventDetails: string, eventCategory?: string) {
    const eventData = {
      'event_category': eventCategory,
      'event_label': eventName,
      'page_location': this.router.url,
      'value': eventDetails
    }
    if (eventName === 'page_view') {
      eventData['page_title'] = eventDetails;
    }
    gtag('event', eventName, eventData);
  }
}
