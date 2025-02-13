import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaNoturnaComponent } from './vida-noturna.component';

describe('VidaNoturnaComponent', () => {
  let component: VidaNoturnaComponent;
  let fixture: ComponentFixture<VidaNoturnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaNoturnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidaNoturnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
