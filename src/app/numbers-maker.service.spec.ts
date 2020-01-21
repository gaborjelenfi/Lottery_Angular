import { TestBed } from '@angular/core/testing';

import { NumbersMakerService } from './numbers-maker.service';

describe('NumbersMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersMakerService = TestBed.get(NumbersMakerService);
    expect(service).toBeTruthy();
  });
});
