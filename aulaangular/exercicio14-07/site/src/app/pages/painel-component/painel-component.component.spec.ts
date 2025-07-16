import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelComponentComponent } from './painel-component.component';

describe('PainelComponentComponent', () => {
  let component: PainelComponentComponent;
  let fixture: ComponentFixture<PainelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
