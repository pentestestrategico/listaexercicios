import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthapiComponent } from './authapi.component';

describe('AuthapiComponent', () => {
  let component: AuthapiComponent;
  let fixture: ComponentFixture<AuthapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
