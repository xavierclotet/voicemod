import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { VoiceFilterFavoritesComponent } from './voice-filter-favorites.component';

describe('VoiceFilterFavoritesComponent', () => {
  let component: VoiceFilterFavoritesComponent;
  let fixture: ComponentFixture<VoiceFilterFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [VoiceFilterFavoritesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFilterFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should createFormGroup return a formGroup initialized', () => {
    const formGroup: FormGroup = component.createFormGroup();
    expect(formGroup).toBeTruthy();
    expect(formGroup.get('favorite')?.value).toBe(false);
  });
});
