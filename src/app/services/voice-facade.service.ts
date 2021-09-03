import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { VoiceService, VoiceApiService, VoiceStateService } from '.';

import { Voice, VoiceFilters, VoiceFiltersDTO } from '../models/voice';

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

  get mappedFilters$(): Observable<VoiceFiltersDTO> {
    return this.filters$.pipe(
      map(filters => this.voiceService.mapToDTO(filters))
    );
  }

  constructor(
    private voiceApiService: VoiceApiService,
    private voiceStateService: VoiceStateService,
    private voiceService: VoiceService) { }

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

  selectVoice(id: string): void {
    this.voiceStateService.setSelected(id);
  }

  sortByName() {
    this.voiceStateService.sortByName();
  }

  selectRandomVoice() {
    this.filteredData$.pipe(
      first(),
      tap((voices) => {
        if (voices.length) {
          const randomVoice = voices[Math.floor(Math.random() * voices.length)];
          this.selectVoice(randomVoice.id);
        }
      })
    ).subscribe();
  }

  mapToDTO(filters: VoiceFilters): VoiceFiltersDTO {
    return this.voiceService.mapToDTO(filters);
  }

}
