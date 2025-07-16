import { TestBed } from '@angular/core/testing';

import { ServiceQuadradoService } from './service-quadrado.service';

describe('ServiceQuadradoService', () => {
  let service: ServiceQuadradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceQuadradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
