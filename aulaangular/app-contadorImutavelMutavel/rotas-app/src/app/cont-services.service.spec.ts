import { TestBed } from '@angular/core/testing';

import { ContServicesService } from './cont-services.service';

describe('ContServicesService', () => {
  let service: ContServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
