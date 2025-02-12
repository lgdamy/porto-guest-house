import { Component, OnInit } from '@angular/core';
import { routes } from '../common/constants/routes';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.scss']
})
export class MenuInicialComponent implements OnInit {

  gridCols: Number
  availableRoutes: string[]

  constructor() { }

  ngOnInit(): void {
    this.availableRoutes = routes
    this.gridCols = window.innerWidth <= 768 ? 2 : 3
  }

  onResize(event) : void {
    this.gridCols = event.target.innerWidth <= 768 ? 2 : 3;
  }


}
