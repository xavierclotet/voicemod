import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Voice } from 'src/app/models/voice';

@Component({
  selector: 'app-voice-list',
  templateUrl: './voice-list.component.html',
  styleUrls: ['./voice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceListComponent {
  @Input() voices: Voice[] | null = [];
  @Input() favorites: string[] | null = [];
  @Input() selected: string | null = null;

  @Output() setFavoriteVoice = new EventEmitter<Voice>();
  @Output() setUnfavoriteVoice = new EventEmitter<Voice>();
  @Output() selectedVoice = new EventEmitter<Voice>();
  @Output() sortByName = new EventEmitter<void>();

  isFavorite(id: string) {
    const found = this.favorites?.some(fav => fav === id);
    return found;
  }

  unsetFavorite(event: MouseEvent, voice: Voice) {
    this.setUnfavoriteVoice.emit(voice);
    event.stopPropagation();
  }

  setFavorite(event: MouseEvent, voice: Voice) {
    this.setFavoriteVoice.emit(voice);
    event.stopPropagation();
  }

  selectVoice(voice: Voice) {
    this.selectedVoice.emit(voice);

  }

  orderByName() {
    this.sortByName.emit();
  }

}
