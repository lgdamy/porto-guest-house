import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-utilidades',
  templateUrl: './utilidades.component.html',
  styleUrls: ['./utilidades.component.scss'],
  animations: [slideInOut]
})
export class UtilidadesComponent extends AnimatedComponent {

}
