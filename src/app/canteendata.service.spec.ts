import { TestBed } from '@angular/core/testing';

import { CanteendataService } from './canteendata.service';

describe('CanteendataService', () => {
  let service: CanteendataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanteendataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
