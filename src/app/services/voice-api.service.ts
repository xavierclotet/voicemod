import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voice } from '../models/voice';

@Injectable({
  providedIn: 'root'
})
export class VoiceApiService {

  constructor(private http: HttpClient) { }

  getVoices(): Observable<Voice[]> {
    return this.http.get<Voice[]>('assets/model/voices.json');
  }
}
