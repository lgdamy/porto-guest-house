import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-pontos-turisticos-atividades',
  templateUrl: './pontos-turisticos-atividades.component.html',
  styleUrls: ['./pontos-turisticos-atividades.component.scss'],
  animations: [slideInOut]
})
export class PontosTuristicosAtividadesComponent extends AnimatedComponent {

    public geoUrls$ = this.geolocatorService.getUrls('pontos-turisticos-atividades');

    constructor(private readonly geolocatorService: GeolocatorService) {
        super();
    }
}
