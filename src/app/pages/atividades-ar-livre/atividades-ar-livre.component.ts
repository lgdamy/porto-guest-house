import { Component, Inject, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from 'src/app/common/animations';

@Component({
  selector: 'app-atividades-ar-livre',
  templateUrl: './atividades-ar-livre.component.html',
  styleUrls: ['./atividades-ar-livre.component.scss'],
  animations: [slideInOut]
})
export class AtividadesArLivreComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
