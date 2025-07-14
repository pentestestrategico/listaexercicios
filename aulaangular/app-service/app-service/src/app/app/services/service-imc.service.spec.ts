import { TestBed } from '@angular/core/testing';

import { ServiceImcService } from './service-imc.service';

describe('ServiceImcService', () => {
  let service: ServiceImcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceImcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
