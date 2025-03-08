import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, fadeInOut } from '@app/common/animations';
import { routes } from '@app/app-routing.module';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.scss'],
  animations: [fadeInOut]
})
export class MenuInicialComponent extends AnimatedComponent implements OnInit {

  gridCols: Number
  availableRoutes;

  ngOnInit(): void {
    this.availableRoutes = routes.filter(route => !route.redirectTo).map(route => route.path).filter(route => !!route);
    this.grid(window);
  }

  onResize(event) : void {
    this.grid(event.target)
  }

  private grid(window: Window) {
    this.gridCols = window.innerWidth <= 768 ? 2 : 3;
  }
}
