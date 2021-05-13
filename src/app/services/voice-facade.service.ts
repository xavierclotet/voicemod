import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Voice, VoiceFilters } from '../models/voice';
import { VoiceApiService } from './voice-api.service';
import { VoiceStateService } from './voice-state.service';

@Injectable({
  providedIn: 'root'
})
export class VoiceFacadeService {
  get voices$(): Observable<Voice[]> {
    return this.voiceStateService.data$;
  }

  get tags$(): Observable<string[]> {
    return this.voiceStateService.tags$;
  }

  get favorites$(): Observable<string[]> {
    return this.voiceStateService.favorites$;
  }

  get filters$(): Observable<VoiceFilters> {
    return this.voiceStateService.filters$;
  }

  get selected$(): Observable<string> {
    return this.voiceStateService.selected$;
  }

  get filteredData$(): Observable<Voice[]> {
    return this.voiceStateService.filteredData$;
  }

  constructor(private voiceApiService: VoiceApiService, private voiceStateService: VoiceStateService) { }

  addFavorite(voice: Voice): void {
    this.voiceStateService.addToFavorites(voice);
  }

  removeFavorite(voice: Voice): void {
    this.voiceStateService.removeFromFavorites(voice);
  }

  loadVoices() {
    this.voiceApiService.getVoices().pipe(
      tap((voices) => this.voiceStateService.setData(voices))
    ).subscribe();
  }

  getVoiceById(id: string): Voice | null {
    return this.voiceStateService.getVoiceById(id);
  }

  setFilters(filters: VoiceFilters) {
    this.voiceStateService.setFilters(filters);
  }

  selectVoice(voice: Voice): void {
    this.voiceStateService.setSelected(voice.id);
  }

  sortByName() {
    this.voiceStateService.sortByName();
  }


}
