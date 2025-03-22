import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { ContainerService } from '@app/common/container.service';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-utilidades',
  templateUrl: './utilidades.component.html',
  styleUrls: ['./utilidades.component.scss'],
  animations: [slideInOut]
})
export class UtilidadesComponent extends AnimatedComponent {

  items = [
    1, //TRANSPORTE PUBLICO
    2, //ESTACIONAMENTO
    3, //GARAGEM IBERIA
    4, //PINGO DOCE
    5, //CONTINENTE
    6, //FARMACIA HENRIQUES
  ]

  geoUrls$ = this.geolocatorService.getUrls('utilidades');

  constructor(
    private readonly geolocatorService: GeolocatorService,
    containerService: ContainerService,
  ) {
      super(containerService);
  }

}
