import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, fadeInOut } from '@app/common/animations';
import { routes } from '@app/common/constants/routes';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.scss'],
  animations: [fadeInOut]
})
export class MenuInicialComponent extends AnimatedComponent implements OnInit {

  gridCols: Number
  availableRoutes = routes;

  ngOnInit(): void {
    this.gridCols = window.innerWidth <= 768 ? 2 : 3
  }

  onResize(event) : void {
    this.gridCols = event.target.innerWidth <= 768 ? 2 : 3;
  }


}
