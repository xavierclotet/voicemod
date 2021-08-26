import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Voice } from 'src/app/models/voice';
import { VoiceFacadeService } from 'src/app/services/voice-facade.service';

import { VoiceFavoritesComponent } from './voice-favorites.component';

const voiceExample: Voice = {
  "id": "adult-to-children",
  "name": "Adult to children",
  "icon": "VoicesVoiceIcon03.png",
  "tags": [
    "human"
  ]
}


describe('VoiceFavoritesComponent', () => {
  let component: VoiceFavoritesComponent;
  let fixture: ComponentFixture<VoiceFavoritesComponent>;
  let fakeVoicefacadeService: VoiceFacadeService;

  beforeEach(async () => {
    //create fake service
    fakeVoicefacadeService = jasmine.createSpyObj<VoiceFacadeService>(
      'VoiceFacadeService', {
      getVoiceById: voiceExample
    }
    );

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VoiceFavoritesComponent],
      providers: [
        {
          provide: VoiceFacadeService,
          useValue: fakeVoicefacadeService
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VoiceFavoritesComponent); // render component
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('show 1 fav', () => {
    const favs: string[] | null = [
      'adult-to-children'
    ];

    component.favorites = favs;
    fixture.detectChanges();
    expect(component.favorites.length).toBe(1);
    expect(fakeVoicefacadeService.getVoiceById).toHaveBeenCalledTimes(2);
    expect(fakeVoicefacadeService.getVoiceById).toHaveBeenCalledWith('adult-to-children');
  });

  it('select voice emit selectVoice output', () => {
    const favs: string[] | null = [
      'adult-to-children'
    ];

    component.favorites = favs;
    component.selected = 'adult-to-children';
    spyOn(component.selectVoice, 'emit').and.callThrough();

    component.onSelectVoice('another');
    expect(component.selectVoice.emit).toHaveBeenCalledWith('another');


  });
});
