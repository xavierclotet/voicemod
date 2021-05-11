import { TestBed } from '@angular/core/testing';

import { VoiceStateService } from './voice-state.service';

describe('VoiceStateService', () => {
  let service: VoiceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
