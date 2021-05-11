import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Voice } from 'src/app/models/voice';

@Component({
  selector: 'app-voice-list',
  templateUrl: './voice-list.component.html',
  styleUrls: ['./voice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceListComponent implements OnInit {
  @Input() voices: Voice[] | null = [];
  @Input() favorites: string[] | null = [];
  @Output() setFavoriteVoice = new EventEmitter<Voice>();
  @Output() setUnfavoriteVoice = new EventEmitter<Voice>();
  constructor() { }

  ngOnInit(): void {
  }

  isFavorite(id: string) {
    const found = this.favorites?.some(fav => fav === id);
    return found;
  }

  unsetFavorite(voice: Voice) {
    this.setUnfavoriteVoice.emit(voice);
  }

  setFavorite(voice: Voice) {
    this.setFavoriteVoice.emit(voice);
  }

}
