import { ComponentFixture, TestBed } from '@angular/core/testing';
import { voice1, voice2 } from 'src/app/spec-helpers/voice.spec-helper';

import { VoiceListComponent } from './voice-list.component';

describe('VoiceListComponent', () => {
  let component: VoiceListComponent;
  let fixture: ComponentFixture<VoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isFavorite true', () => {
    component.favorites = [voice1.id];
    const isFav = component.isFavorite(voice1.id);
    expect(isFav).toBe(true);
  });

  it('isFavorite false, not in list', () => {
    component.favorites = [voice1.id];
    const isFav = component.isFavorite(voice2.id);
    expect(isFav).toBe(false);
  });

  it('unsetFavorite ', () => {
    const mouseclick = new MouseEvent('mouseclick')
    spyOn(component.setUnfavoriteVoice, 'emit');
    component.unsetFavorite(mouseclick, voice1);
    expect(component.setUnfavoriteVoice.emit).toHaveBeenCalledWith(voice1);
  });

  it('setFavorite ', () => {
    const mouseclick = new MouseEvent('mouseclick')
    spyOn(component.setFavoriteVoice, 'emit');
    component.setFavorite(mouseclick, voice1);
    expect(component.setFavoriteVoice.emit).toHaveBeenCalledWith(voice1);
  });

  it('selectVoice ', () => {
    spyOn(component.selectedVoice, 'emit');
    component.selectVoice(voice1);
    expect(component.selectedVoice.emit).toHaveBeenCalledWith(voice1);
  });

  it('orderByName ', () => {
    spyOn(component.sortByName, 'emit');
    component.orderByName();
    expect(component.sortByName.emit).toHaveBeenCalled()
  });
});
