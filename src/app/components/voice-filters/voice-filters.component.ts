import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { VoiceFilters } from 'src/app/models/voice';
import { VoiceFilterFavoritesComponent } from '../voice-filter-favorites/voice-filter-favorites.component';


@Component({
  selector: 'app-voice-filters',
  templateUrl: './voice-filters.component.html',
  styleUrls: ['./voice-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceFiltersComponent implements OnInit {
  @ViewChild(VoiceFilterFavoritesComponent, { static: true }) voiceFilterFavorites!: VoiceFilterFavoritesComponent;
  @Input() tags: string[] | null = [];
  @Input() selected: string | null = null;
  @Output() changedFilters = new EventEmitter<VoiceFilters>();
  @Output() randomVoice = new EventEmitter<void>();

  form!: FormGroup;
  animate = '';
  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      search: [''],
      tag: [''],
      favorites: this.voiceFilterFavorites.createFormGroup()
    });

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
