import { TestBed } from '@angular/core/testing';

import { DayRaterService } from './day-rater.service';

describe('DayRaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayRaterService = TestBed.get(DayRaterService);
    expect(service).toBeTruthy();
  });
});
