import { TestBed } from '@angular/core/testing';

import { UpdatedItemService } from './updated-item.service';

describe('UpdatedItemService', () => {
  let service: UpdatedItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
