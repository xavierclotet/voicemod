import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private voiceFacadeService: VoiceFacadeService) { }

  ngOnInit(): void {
    this.voiceFacadeService.loadVoices();
  }

  onChangedFilters(filters: VoiceFilters) {
    this.voiceFacadeService.setFilters(filters);
  }

}
