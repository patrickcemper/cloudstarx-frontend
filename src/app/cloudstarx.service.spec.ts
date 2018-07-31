import { TestBed, inject } from '@angular/core/testing';

import { CloudstarxService } from './cloudstarx.service';

describe('CloudstarxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudstarxService]
    });
  });

  it('should be created', inject([CloudstarxService], (service: CloudstarxService) => {
    expect(service).toBeTruthy();
  }));
});
