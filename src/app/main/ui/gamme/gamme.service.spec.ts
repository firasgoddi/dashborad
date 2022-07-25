import { TestBed } from '@angular/core/testing';

import { GammeService } from './gamme.service';

describe('GammeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GammeService = TestBed.get(GammeService);
    expect(service).toBeTruthy();
  });
});
