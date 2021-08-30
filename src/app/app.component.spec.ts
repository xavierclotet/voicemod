import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { AppComponent } from './app.component';
import { VoicemodComponent } from './components/voicemod/voicemod.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockComponents(VoicemodComponent)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
