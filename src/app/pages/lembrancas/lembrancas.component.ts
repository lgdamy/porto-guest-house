import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-lembrancas',
  templateUrl: './lembrancas.component.html',
  styleUrls: ['./lembrancas.component.scss'],
  animations: [slideInOut]
})
export class LembrancasComponent extends AnimatedComponent {

  ngOnInit(): void {
  }

}
