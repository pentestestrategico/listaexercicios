import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dados2Component } from './dados2.component';

describe('Dados2Component', () => {
  let component: Dados2Component;
  let fixture: ComponentFixture<Dados2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dados2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dados2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
