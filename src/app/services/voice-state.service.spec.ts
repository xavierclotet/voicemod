import { TestBed } from '@angular/core/testing';
import { filters, voice1, voice2, voices } from '../spec-helpers/voice.spec-helper';

import { VoiceStateService } from './voice-state.service';

fdescribe('VoiceStateService', () => {
  let service: VoiceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setData ', () => {
    service.setData(voices);
    service.data$.subscribe(data => {
      expect(data).toEqual(voices);
    });

    service.tags$.subscribe(tags => {
      expect(tags).toEqual(tags);
    });
  })

  it('setFilters', () => {
    service.setFilters(filters);
    service.filters$.subscribe(data => {
      expect(data).toEqual(filters);
    });
  });

  it('setSelected', () => {
    service.setSelected(voice1.id);
    service.selected$.subscribe(data => {
      expect(data).toEqual(voice1.id);
    });
  });

  it('getVoiceById', () => {
    service.setData(voices);
    const voice = service.getVoiceById(voice1.id);
    expect(voice).toEqual(voice1);
  });

  it('addToFavorites ', () => {
    service.addToFavorites(voice1);
    service.favorites$.subscribe(data => {
      expect(data).toEqual([voice1.id]);
    });
  });

  it('removeFromFavorites ', () => {
    service.addToFavorites(voice1);
    service.removeFromFavorites(voice1);
    service.favorites$.subscribe(data => {
      expect(data).toEqual([]);
    });
  });

  it('sortByName ', () => {
    service.setData(voices);
    service.sortByName();
    service.sort$.subscribe(data => {
      expect(data).toEqual('desc');
    });

    service.data$.subscribe(data => {
      expect(data).toEqual([voice2, voice1]);
    });
  });


});
