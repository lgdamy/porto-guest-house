import { Component, OnInit } from '@angular/core';
import { AnimatedComponent, slideInOut } from 'src/app/common/animations';

@Component({
  selector: 'app-roteiros-prontos',
  templateUrl: './roteiros-prontos.component.html',
  styleUrls: ['./roteiros-prontos.component.scss'],
  animations: [slideInOut]
})
export class RoteirosProntosComponent extends AnimatedComponent implements OnInit {

  ngOnInit(): void {
  }

}
