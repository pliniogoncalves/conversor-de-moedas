import { TestBed } from '@angular/core/testing';

import { CoinConvertionService } from './coin-convertion.service';

describe('CoinConvertionService', () => {
  let service: CoinConvertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinConvertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
