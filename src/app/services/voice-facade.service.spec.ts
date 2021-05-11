import { TestBed } from '@angular/core/testing';

import { VoiceFacadeService } from './voice-facade.service';

describe('VoiceFacadeService', () => {
  let service: VoiceFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
