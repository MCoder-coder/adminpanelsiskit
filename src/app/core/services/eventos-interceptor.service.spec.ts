import { TestBed } from '@angular/core/testing';

import { EventosInterceptorService } from './eventos-interceptor.service';

describe('EventosInterceptorService', () => {
  let service: EventosInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
