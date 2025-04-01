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

  constructor(){}
}
