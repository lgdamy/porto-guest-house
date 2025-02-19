import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['./mercados.component.scss'],
  animations: [slideInOut]
})
export class MercadosComponent extends AnimatedComponent {

  ngOnInit(): void {
  }

}
