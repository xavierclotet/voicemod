import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { voice1, voices } from '../spec-helpers/voice.spec-helper';
import { VoiceApiService } from './voice-api.service';
import { VoiceFacadeService } from './voice-facade.service';
import { VoiceStateService } from './voice-state.service';
import { MockProvider } from 'ng-mocks';
describe('VoiceFacadeService', () => {
  let service: VoiceFacadeService;
  let voiceStateService: VoiceStateService;
  let voiceApiService: VoiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockProvider(VoiceStateService),
        MockProvider(VoiceApiService)
      ],
    }).compileComponents();
    service = TestBed.inject(VoiceFacadeService);
    voiceStateService = TestBed.inject(VoiceStateService);
    voiceApiService = TestBed.inject(VoiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addFavorite calls de state addToFavorites', () => {
    // mockProperty(voiceStateService, 'data$', of([]));
    spyOn(voiceStateService, 'addToFavorites');
    service.addFavorite(voice1);
    expect(voiceStateService.addToFavorites).toHaveBeenCalledWith(voice1);

  });

  it('removeFavorite', () => {
    spyOn(voiceStateService, 'removeFromFavorites');
    service.removeFavorite(voice1);
    expect(voiceStateService.removeFromFavorites).toHaveBeenCalledWith(voice1);
  });

  it('loadVoices', () => {
    spyOn(voiceApiService, 'getVoices').and.returnValue(of(voices));
    spyOn(voiceStateService, 'setData');
    service.loadVoices();
    expect(voiceApiService.getVoices).toHaveBeenCalled();
    expect(voiceStateService.setData).toHaveBeenCalledWith(voices);
  });

  it('getVoiceById', () => {
    spyOn(voiceStateService, 'getVoiceById').and.returnValue(voice1);

    const voice = service.getVoiceById(voice1.id);
    expect(voice).toEqual(voices[0]);
  });


});

