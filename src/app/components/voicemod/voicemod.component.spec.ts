import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemodComponent } from './voicemod.component';

describe('VoicemodComponent', () => {
  let component: VoicemodComponent;
  let fixture: ComponentFixture<VoicemodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicemodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
