import { Component, Injector } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.scss'],
  animations: [slideInOut]
})
export class CulturaComponent extends AnimatedComponent {

  items = [
    1, // SERRALVES
    2, // MUSEU SOARES DOS REIS
    3, // CENTRO PORTUGUES FOTOGRAFIA
    4, // CINEMA DA BATALHA
    5, // TEATRO SAO JOAO
    6, // CASA DA MUSICA
    7, // ALFANDEGA
  ]

  geoUrls$ = this.geolocatorService.getUrls('cultura');

  constructor(
    private readonly geolocatorService: GeolocatorService,
    injector: Injector
  ) {
      super(injector);
  }

}
