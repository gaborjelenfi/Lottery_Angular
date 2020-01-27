import { TestBed } from '@angular/core/testing';

import { ControlInputService } from './controlInput.service';

describe('ControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlInputService = TestBed.get(ControlInputService);
    expect(service).toBeTruthy();
  });
});
