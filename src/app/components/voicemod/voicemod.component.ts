import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voice } from 'src/app/models/voice';
import { VoiceFacadeService } from 'src/app/services/voice-facade.service';

@Component({
  selector: 'app-voicemod',
  templateUrl: './voicemod.component.html',
  styleUrls: ['./voicemod.component.scss']
})
export class VoicemodComponent implements OnInit {
  favorites: Voice[] = [];
  voices$: Observable<Voice[]> = this.voiceFacadeService.voices$;
  tags$: Observable<string[]> = this.voiceFacadeService.tags$;
  constructor(private voiceFacadeService: VoiceFacadeService) {

  }

  ngOnInit(): void {
    this.voiceFacadeService.loadVoices();
  }

}
