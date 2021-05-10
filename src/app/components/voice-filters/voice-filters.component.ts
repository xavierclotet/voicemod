import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VoiceFilters } from 'src/app/models/voice';


@Component({
  selector: 'app-voice-filters',
  templateUrl: './voice-filters.component.html',
  styleUrls: ['./voice-filters.component.scss']
})
export class VoiceFiltersComponent implements OnInit {
  @Output() changedFilters = new EventEmitter<VoiceFilters>();
  @Output() randomVoice = new EventEmitter<void>();
  filters: FormGroup;
  constructor(
    formBuilder: FormBuilder
  ) {
    this.filters = formBuilder.group({
      search: [''],
      tag: ['']
    });
   }

  ngOnInit(): void {
    
  }

  clickedRandomVoice() {
    this.randomVoice.emit();
  }

  

}
