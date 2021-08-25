import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFavoritesComponent } from './voice-favorites.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('VoiceFavoritesComponent', () => {
  let component: VoiceFavoritesComponent;
  let fixture: ComponentFixture<VoiceFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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

  it('show 2 favs', () => {

  });
});
