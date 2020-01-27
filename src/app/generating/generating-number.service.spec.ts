import { TestBed } from '@angular/core/testing';

import { GeneratingNumberService } from './generating-number.service';

describe('GeneratingNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratingNumberService = TestBed.get(GeneratingNumberService);
    expect(service).toBeTruthy();
  });
});
