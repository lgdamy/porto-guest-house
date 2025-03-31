import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TrackingService } from '@app/common/tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porto-guest-house';

  constructor(
    public router : Router,
    tracking : TrackingService,
    ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        tracking.track('page_view', event.urlAfterRedirects, 'ROUTING');
      }
    })
  }
}
