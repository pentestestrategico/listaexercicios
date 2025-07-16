import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador04Component } from './contador04.component';

describe('Contador04Component', () => {
  let component: Contador04Component;
  let fixture: ComponentFixture<Contador04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
