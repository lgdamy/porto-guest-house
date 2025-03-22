import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private containerRef$ = new BehaviorSubject<ElementRef>(null);

  setContainer(ref: ElementRef) {
    this.containerRef$.next(ref);
  }

  getContainer() {
    return this.containerRef$.asObservable();
  }
}
