import { Component } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.scss'],
  animations: [slideInOut]
})
export class CulturaComponent extends AnimatedComponent {

  ngOnInit(): void {
  }

}
