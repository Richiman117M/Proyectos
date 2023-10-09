import { TestBed } from '@angular/core/testing';

import { CasasServiceService } from './casas-service.service';

describe('CasasServiceService', () => {
  let service: CasasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
