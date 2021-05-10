import { Component, OnInit } from '@angular/core';
import { Voice } from 'src/app/models/voice';

@Component({
  selector: 'app-voicemod',
  templateUrl: './voicemod.component.html',
  styleUrls: ['./voicemod.component.scss']
})
export class VoicemodComponent implements OnInit {
  favorites: Voice[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
/* 
Fer com un estat amb favorites, selected filter:  name, tag
*/ 
}
