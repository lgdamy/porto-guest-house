import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-utilidades',
  templateUrl: './utilidades.component.html',
  styleUrls: ['./utilidades.component.scss'],
  animations: [slideInOut]
})
export class UtilidadesComponent extends AnimatedComponent {

  geoUrls$ = this.geolocatorService.getUrls('utilidades');

  constructor(
    private readonly geolocatorService: GeolocatorService,
  ) {
      super();
  }

}
