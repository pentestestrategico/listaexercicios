import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador02Component } from './contador02.component';

describe('Contador02Component', () => {
  let component: Contador02Component;
  let fixture: ComponentFixture<Contador02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
