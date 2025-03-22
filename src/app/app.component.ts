import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerService } from './common/container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'porto-guest-house';
  @ViewChild('container') containerRef!: ElementRef;

  constructor(
    private readonly containerService: ContainerService,
    private readonly router: Router,
    ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.router.url == '/') {
        this.containerRef.nativeElement.classList.add('menu-inicial');
      } else {
        this.containerRef.nativeElement.classList.remove('menu-inicial');
      }
    })
  }
  ngAfterViewInit() {
    if (this.containerRef) {
      this.containerService.setContainer(this.containerRef);
    }
  }

}
