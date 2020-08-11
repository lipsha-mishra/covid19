import { TestBed, inject } from '@angular/core/testing';

import { CovidService } from './covid.service';

describe('CovidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovidService]
    });
  });

  it('should be created', inject([CovidService], (service: CovidService) => {
    expect(service).toBeTruthy();
  }));
});
