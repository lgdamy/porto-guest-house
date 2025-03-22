import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { ContainerService } from '@app/common/container.service';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss'],
  animations: [slideInOut]
})
export class GastronomiaComponent extends AnimatedComponent {

  items = {
    'comidas-tipicas': [
      1, // FRANCESINHA
      2, // TRIPAS
      3, // FRUTOS DO MAR
      4, // QUEIJO DA SERRA
    ],
    'restaurantes': [
      9, // ELEBE
      2, // BRASAO
      3, // CASA GUEDES
      5, // GAZELA
      8, // DOURO SENTIDO
      1, // CONGA
      6, // SANCHO PANÇA
      10, // TORREAO
      4, // ABADIA
      7, // LAREU
    ],
  };

  geoUrls$ = this.geolocatorService.getUrls('gastronomia');

  constructor(
    private readonly geolocatorService: GeolocatorService,
    containerService: ContainerService,
    ) {
      super(containerService);
  }

}
