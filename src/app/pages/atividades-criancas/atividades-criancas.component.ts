import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from '@app/common/animations';

@Component({
  selector: 'app-atividades-criancas',
  templateUrl: './atividades-criancas.component.html',
  styleUrls: ['./atividades-criancas.component.scss'],
  animations: [slideInOut]
  
})
export class AtividadesCriancasComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
