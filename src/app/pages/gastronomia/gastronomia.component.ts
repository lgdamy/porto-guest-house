import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss'],
  animations: [slideInOut]
})
export class GastronomiaComponent extends AnimatedComponent {

  public geoUrls$ = this.geolocatorService.getUrls('gastronomia');

  constructor(private readonly geolocatorService: GeolocatorService) {
      super();
  }

}
