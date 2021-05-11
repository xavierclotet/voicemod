import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Voice } from 'src/app/models/voice';

@Component({
  selector: 'app-voice-list',
  templateUrl: './voice-list.component.html',
  styleUrls: ['./voice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceListComponent implements OnInit {
  @Input() voices: Voice[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
