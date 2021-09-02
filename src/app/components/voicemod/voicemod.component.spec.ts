import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockProvider } from 'ng-mocks';
import { VoiceFacadeService } from 'src/app/services/voice-facade.service';
import { filters, voice1 } from 'src/app/spec-helpers/voice.spec-helper';
import { VoiceFavoritesComponent } from '../voice-favorites/voice-favorites.component';
import { VoiceFiltersComponent } from '../voice-filters/voice-filters.component';
import { VoiceListComponent } from '../voice-list/voice-list.component';

import { VoicemodComponent } from './voicemod.component';

describe('VoicemodComponent', () => {
  let component: VoicemodComponent;
  let fixture: ComponentFixture<VoicemodComponent>;
  let voiceFacadeService: VoiceFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoicemodComponent, MockComponents(VoiceFiltersComponent, VoiceListComponent, VoiceFavoritesComponent)],
      providers: [MockProvider(VoiceFacadeService)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(VoicemodComponent);
    component = fixture.componentInstance;
    voiceFacadeService = TestBed.inject(VoiceFacadeService);

  });


  it('should create', () => {
    spyOn(voiceFacadeService, 'loadVoices');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(voiceFacadeService.loadVoices).toHaveBeenCalled();
  });

  it('onChangedFilters ', () => {
    spyOn(voiceFacadeService, 'setFilters');
    component.onChangedFilters(filters);
    expect(voiceFacadeService.setFilters).toHaveBeenCalledWith(filters);
  });

  it('setUnfavoriteVoice ', () => {
    spyOn(voiceFacadeService, 'removeFavorite');
    component.setUnfavoriteVoice(voice1);
    expect(voiceFacadeService.removeFavorite).toHaveBeenCalledWith(voice1);
  });

  it('setFavoriteVoice ', () => {
    spyOn(voiceFacadeService, 'addFavorite');
    component.setFavoriteVoice(voice1);
    expect(voiceFacadeService.addFavorite).toHaveBeenCalledWith(voice1);
  });

  it('selectedVoice ', () => {
    spyOn(voiceFacadeService, 'selectVoice');
    component.selectedVoice(voice1);
    expect(voiceFacadeService.selectVoice).toHaveBeenCalledWith(voice1.id);
  });

  it('onSelectRandomVoice ', () => {
    spyOn(voiceFacadeService, 'selectRandomVoice');
    component.onSelectRandomVoice();
    expect(voiceFacadeService.selectRandomVoice).toHaveBeenCalled();
  });

  it('sortByName ', () => {
    spyOn(voiceFacadeService, 'sortByName');
    component.sortByName();
    expect(voiceFacadeService.sortByName).toHaveBeenCalled();
  });

  it('selectVoice ', () => {
    spyOn(voiceFacadeService, 'selectVoice');
    component.selectVoice(voice1.id);
    expect(voiceFacadeService.selectVoice).toHaveBeenCalledWith(voice1.id);
  });
});
