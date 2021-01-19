import { TestBed } from '@angular/core/testing';

import { HttpRequestsHanderService } from './http-requests-hander.service';

describe('HttpRequestsHanderService', () => {
  let service: HttpRequestsHanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestsHanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
