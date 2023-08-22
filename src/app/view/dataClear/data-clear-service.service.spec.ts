import { TestBed } from '@angular/core/testing';

import { DataClearServiceService } from './data-clear-service.service';

describe('DataClearServiceService', () => {
  let service: DataClearServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataClearServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
