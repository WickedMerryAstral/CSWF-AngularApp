import { TestBed } from '@angular/core/testing';

import { WebtokenService } from './webtoken.service';

describe('WebtokenService', () => {
  let service: WebtokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebtokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
