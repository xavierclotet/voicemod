import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoicemodComponent } from './components/voicemod/voicemod.component';
import { VoiceFiltersComponent } from './components/voice-filters/voice-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoiceListComponent } from './components/voice-list/voice-list.component';
import { VoiceFavoritesComponent } from './components/voice-favorites/voice-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    VoicemodComponent,
    VoiceFiltersComponent,
    VoiceListComponent,
    VoiceFavoritesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
