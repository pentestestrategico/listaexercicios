import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador03Component } from './contador03.component';

describe('Contador03Component', () => {
  let component: Contador03Component;
  let fixture: ComponentFixture<Contador03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
