import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from 'src/app/common/animations';

@Component({
  selector: 'app-pontos-turisticos-atividades',
  templateUrl: './pontos-turisticos-atividades.component.html',
  styleUrls: ['./pontos-turisticos-atividades.component.scss'],
  animations: [slideInOut]
})
export class PontosTuristicosAtividadesComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
