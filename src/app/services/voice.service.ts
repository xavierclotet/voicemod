import { Injectable } from '@angular/core';
import { VoiceFilters, VoiceFiltersDTO } from '../models/voice';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor() { }

  mapToDTO(filters: VoiceFilters): VoiceFiltersDTO {
    return {
      search: filters.search,
      tag: filters.tag,
      showFavorite: filters.favorites.favorite
    }
  }
}
