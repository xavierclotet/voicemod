export interface Voice {
  id: string;
  name: string;
  icon: string;
  tags: string[];
}

export interface VoiceFilters {
  search: string;
  tag: string;
  favorites: {
    favorite: boolean;
  }
}

export interface VoiceFiltersDTO {
  search: string;
  tag: string;
  showFavorite: boolean;
}
