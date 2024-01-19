import { TestBed } from '@angular/core/testing';

import { RequiredService } from './required.service';

describe('RequiredService', () => {
  let service: RequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
