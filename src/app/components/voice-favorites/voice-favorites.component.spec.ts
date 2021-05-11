import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFavoritesComponent } from './voice-favorites.component';

describe('VoiceFavoritesComponent', () => {
  let component: VoiceFavoritesComponent;
  let fixture: ComponentFixture<VoiceFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
