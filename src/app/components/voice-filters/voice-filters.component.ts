import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { VoiceFilters } from 'src/app/models/voice';


@Component({
  selector: 'app-voice-filters',
  templateUrl: './voice-filters.component.html',
  styleUrls: ['./voice-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceFiltersComponent implements OnInit {
  @Input() tags: string[] | null = [];
  @Input() selected: string | null = null;
  @Output() changedFilters = new EventEmitter<VoiceFilters>();
  @Output() randomVoice = new EventEmitter<void>();
  form: FormGroup;
  animate = '';
  constructor(
    formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.form = formBuilder.group({
      search: [''],
      tag: ['']
    });
   }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      tap(() => this.changedFilters.emit(this.form.value as VoiceFilters))
    ).subscribe();
  }

  clickedRandomVoice() {
    this.randomVoice.emit();
    this.setAnimation();

  }

  setAnimation() {
    this.animate = 'animate__animated animate__tada';
    setTimeout(() => {
      this.animate = '';
      this.cd.markForCheck();
    }, 2000);
  }


}
