import { TestBed } from '@angular/core/testing';

import { RickyService } from './ricky.service';

describe('EpisodesService', () => {
  let service: RickyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
