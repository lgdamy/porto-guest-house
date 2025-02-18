import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss'],
  animations: [slideInOut]
})
export class GastronomiaComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
