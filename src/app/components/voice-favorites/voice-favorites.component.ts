import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
  constructor(private voiceFacadeService: VoiceFacadeService) { }

  ngOnInit(): void {
  }

  getVoiceById(id: string): Voice | null {
    return this.voiceFacadeService.getVoiceById(id);
  }


}
