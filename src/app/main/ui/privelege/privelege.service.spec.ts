import { TestBed } from '@angular/core/testing';

import { PrivelegeService } from './privelege.service';

describe('PrivelegeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivelegeService = TestBed.get(PrivelegeService);
    expect(service).toBeTruthy();
  });
});
