import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';
import { GeolocatorService } from '@app/common/geolocator.service';

@Component({
  selector: 'app-vida-noturna',
  templateUrl: './vida-noturna.component.html',
  styleUrls: ['./vida-noturna.component.scss'],
  animations: [slideInOut],
})
export class VidaNoturnaComponent extends AnimatedComponent {

  items = [
    1,// GALERIAS DE PARIS
    2, // BASE PORTO
    3, // PEROLA NEGRA
    4, // MAUS HABITOS
    5, // PLANO B
    6, // HOT FIVE JAZZ E BLUES
    7, // WOW
    8, // MARIA PISTOLAS
  ]

  geoUrls$ = this.geolocatorService.getUrls('vida-noturna');

  constructor(private readonly geolocatorService: GeolocatorService) {
      super();
  }

}
