import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.scss'],
  animations: [slideInOut]
})
export class CulturaComponent extends AnimatedComponent {

  geoUrls$ = this.geolocatorService.getUrls('cultura');

  constructor(
    private readonly geolocatorService: GeolocatorService,
  ) {
      super();
  }

}
