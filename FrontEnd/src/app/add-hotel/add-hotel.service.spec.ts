import { TestBed } from '@angular/core/testing';

import { AddHotelService } from './add-hotel.service';

describe('AddHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHotelService = TestBed.get(AddHotelService);
    expect(service).toBeTruthy();
  });
});
