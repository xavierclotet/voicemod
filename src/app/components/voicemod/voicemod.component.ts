import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Voice, VoiceFilters } from 'src/app/models/voice';
import { VoiceFacadeService } from 'src/app/services/voice-facade.service';

@Component({
  selector: 'app-voicemod',
  templateUrl: './voicemod.component.html',
  styleUrls: ['./voicemod.component.scss']
})
export class VoicemodComponent implements OnInit {
  favorites: Voice[] = [];
  voices$: Observable<Voice[]> = this.voiceFacadeService.filteredData$
  tags$: Observable<string[]> = this.voiceFacadeService.tags$;
  favorites$: Observable<string[]> = this.voiceFacadeService.favorites$;
  selected$: Observable<string> = this.voiceFacadeService.selected$;
  constructor(private voiceFacadeService: VoiceFacadeService) { }

  ngOnInit(): void {
    this.voiceFacadeService.loadVoices();
  }

  onChangedFilters(filters: VoiceFilters) {
    this.voiceFacadeService.setFilters(filters);
  }

  setUnfavoriteVoice(voice: Voice) {
    this.voiceFacadeService.removeFavorite(voice);
  }

  setFavoriteVoice(voice: Voice) {
    this.voiceFacadeService.addFavorite(voice);
  }

  selectedVoice(voice: Voice) {
    this.voiceFacadeService.selectVoice(voice);
  }

  onSelectRandomVoice() {
    this.voices$.pipe(
      first(),
      tap((voices) => {
        if (voices.length) {
          const randomVoice = voices[Math.floor(Math.random() * voices.length)];
          this.voiceFacadeService.selectVoice(randomVoice);
        }
      })
    ).subscribe();

  }

  sortByName() {
    this.voiceFacadeService.sortByName();
  }

}
