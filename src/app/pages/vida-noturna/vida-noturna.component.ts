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

  public geoUrls$ = this.geolocatorService.getUrls('vida-noturna');

  constructor(private readonly geolocatorService: GeolocatorService) {
      super();
  }

}
