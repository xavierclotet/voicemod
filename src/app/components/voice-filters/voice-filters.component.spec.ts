import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFiltersComponent } from './voice-filters.component';

describe('VoiceFiltersComponent', () => {
  let component: VoiceFiltersComponent;
  let fixture: ComponentFixture<VoiceFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
