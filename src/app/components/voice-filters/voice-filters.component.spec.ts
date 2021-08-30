import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { VoiceFiltersComponent } from './voice-filters.component';

describe('VoiceFiltersComponent', () => {
  let component: VoiceFiltersComponent;
  let fixture: ComponentFixture<VoiceFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ VoiceFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFiltersComponent);
    component = fixture.componentInstance;

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
      tag: ''
    });
  });

  it('clickedRandomVoice ', () => {
    spyOn(component.randomVoice, 'emit');
    component.clickedRandomVoice();
    expect(component.randomVoice.emit).toHaveBeenCalled();

  });
});
