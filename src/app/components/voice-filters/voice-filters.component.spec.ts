import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponents } from 'ng-mocks';
import { findEl } from 'src/app/spec-helpers/element.spec-helper';
import { VoiceFilterFavoritesComponent } from '../voice-filter-favorites/voice-filter-favorites.component';

import { VoiceFiltersComponent } from './voice-filters.component';

fdescribe('VoiceFiltersComponent', () => {
  let component: VoiceFiltersComponent;
  let fixture: ComponentFixture<VoiceFiltersComponent>;
  const voiceFilterFavorites = jasmine.createSpyObj('VoiceFilterFavoritesComponent', ['createFormGroup']);
  voiceFilterFavorites.createFormGroup.and.returnValue({ favorite: false });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [VoiceFiltersComponent, MockComponents(VoiceFilterFavoritesComponent)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFiltersComponent);
    component = fixture.componentInstance;
    component.voiceFilterFavorites = voiceFilterFavorites;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('when change form changedFilters should emit the object filter', () => {
    spyOn(component.changedFilters, 'emit');
    fixture.detectChanges();
    component.form.patchValue({
      search: 'a'
    });

    expect(component.changedFilters.emit).toHaveBeenCalledWith({
      search: 'a',
      tag: '',
      favorites: {
        favorite: false,
      }
    });
  });

  it('clickedRandomVoice ', () => {
    spyOn(component.randomVoice, 'emit');
    component.clickedRandomVoice();
    expect(component.randomVoice.emit).toHaveBeenCalled();
  });

  it('user type into search input', () => {
    spyOn(component.changedFilters, 'emit');
    fixture.detectChanges();
    const inputEl = findEl(fixture, 'input-search').nativeElement;
    inputEl.value = 'probando';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.changedFilters.emit).toHaveBeenCalledWith({
      search: 'probando',
      tag: '',
      favorites: {
        favorite: false,
      }
    });
  });
});
