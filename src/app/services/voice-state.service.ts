import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Voice, VoiceFilters } from '../models/voice';

@Injectable({
  providedIn: 'root'
})
export class VoiceStateService {
  private _filters$ = new BehaviorSubject<VoiceFilters>({
    search: '',
    tag: ''
  });
  get filters$(): Observable<VoiceFilters> {
    return this._filters$.asObservable();
  }

  private _selected$ = new BehaviorSubject<string>('');
  get selected$(): Observable<string> {
    return this._selected$.asObservable();
  }

  private _data$ = new BehaviorSubject<Voice[]>([]);
  get data$(): Observable<Voice[]> {
    return this._data$.asObservable();
  }

  private _favorites$ = new BehaviorSubject<string[]>([]);
  get favorites$(): Observable<string[]> {
    return this._favorites$.asObservable();
  }

  private _tags$ = new BehaviorSubject<string[]>([]);
  get tags$(): Observable<string[]> {
    return this._tags$.asObservable();
  }

  get filteredData$(): Observable<Voice[]> {
    return combineLatest([
      this.data$,
      this.filters$
    ]).pipe(
      map(([voices, filters]) => voices
        .filter(voice => filters.search ? (voice.name.toLowerCase().indexOf(filters.search.toLowerCase()) !== -1) : true)
        .filter(voice => filters.tag ? voice.tags.some(tag => filters.tag === tag) : true)
      ));
  }

  constructor() { }

  setData(voices: Voice[]) {
    this._data$.next(voices);
    this.setTags();
  }

  setFilters(filters: VoiceFilters) {
    this._filters$.next(filters);
  }

  setSelected(voiceId: string) {
    this._selected$.next(voiceId);
  }

  getVoiceById(id: string): Voice | null {
    const found = this._data$.getValue().find(voices => voices.id === id);
    return found ? found : null;
  }

  addToFavorites(voice: Voice): void {
    if (voice) {
      const favs = this._favorites$.getValue();
      const newFavs = [...favs, voice.id];
      this._favorites$.next(newFavs);
    } else {
      console.warn('addToFavorites: voice not defined');
    }
  }

  removeFromFavorites(voice: Voice): void {
    const newFavs = this._favorites$.getValue().filter(voiceId => voiceId !== voice.id);
    this._favorites$.next(newFavs);
  }

  private setTags() {
    const tags = this._data$.getValue().map(data => data.tags);
    const unique = [...new Set(tags.flat())];
    this._tags$.next(unique.sort());
  }

}
