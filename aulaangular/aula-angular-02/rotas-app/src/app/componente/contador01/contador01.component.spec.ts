import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador01Component } from './contador01.component';

describe('Contador01Component', () => {
  let component: Contador01Component;
  let fixture: ComponentFixture<Contador01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
