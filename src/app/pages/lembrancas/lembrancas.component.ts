import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-lembrancas',
  templateUrl: './lembrancas.component.html',
  styleUrls: ['./lembrancas.component.scss'],
  animations: [slideInOut]
})
export class LembrancasComponent extends AnimatedComponent {

  items = [
    1, // OCERAMICA
    2, // OGALERIA
    3, // GARRAFEIRA CARMO
    4, // TORANJA
    5, // CASA NATAL
    6, // PEROLA BOLHAO
    7, // PROMETEU
  ]

  geoUrls$ = this.geolocatorService.getUrls('lembrancas');

  constructor(
    private readonly geolocatorService: GeolocatorService,
  ) {
      super();
  }

}
