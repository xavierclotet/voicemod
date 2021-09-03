import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voice-filter-favorites',
  templateUrl: './voice-filter-favorites.component.html',
  styleUrls: ['./voice-filter-favorites.component.scss'],
})
export class VoiceFilterFavoritesComponent {
  favoritesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.favoritesForm = this.formBuilder.group({
      favorite: [false],
    });
  }

  createFormGroup(): FormGroup {
    return this.favoritesForm;
  }

}
