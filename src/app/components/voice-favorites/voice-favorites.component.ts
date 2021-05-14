import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Voice } from 'src/app/models/voice';
import { VoiceFacadeService } from 'src/app/services/voice-facade.service';

@Component({
  selector: 'app-voice-favorites',
  templateUrl: './voice-favorites.component.html',
  styleUrls: ['./voice-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceFavoritesComponent implements OnInit {
  @Input() favorites: string[] | null = [];
  @Input() selected: string | null = null;
  @Output() selectVoice = new EventEmitter<string>();;
  constructor(private voiceFacadeService: VoiceFacadeService) { }

  ngOnInit(): void {
  }

  private getVoiceById(id: string): Voice | null {
    return this.voiceFacadeService.getVoiceById(id);
  }

  getVoiceIcon(id: string): string {
    const voice = this.getVoiceById(id);
    return voice ? voice.icon : '';
  }

  getVoiceName(id: string): string {
    const voice = this.getVoiceById(id);
    return voice ? voice.name : '';
  }

  onSelectVoice(id: string) {
    if (id !== this.selected) {
      this.selectVoice.emit(id);
    }
  }




}
