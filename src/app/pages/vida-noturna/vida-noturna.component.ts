import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-vida-noturna',
  templateUrl: './vida-noturna.component.html',
  styleUrls: ['./vida-noturna.component.scss'],
  animations: [slideInOut],
})
export class VidaNoturnaComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
