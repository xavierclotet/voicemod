import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Voice } from '../models/voice';
import { voices } from '../spec-helpers/voice.spec-helper';
import { VoiceApiService } from './voice-api.service';

fdescribe('VoiceApiService', () => {
  let service: VoiceApiService;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VoiceApiService
      ]
    });
    service = TestBed.inject(VoiceApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getVoices returns an array of voices', () => {
    let actualVoices: Voice[] | undefined;
    service.getVoices().subscribe(voices => {
      actualVoices = voices;
    });

    const expectedUrl = 'assets/model/voices.json';
    const request = controller.expectOne({
      method: 'GET',
      url: expectedUrl
    }); // buscamos la petición GET expectedUrl
    // expect(request.request.headers.get('Accept')).toBe('application/json');
    // respondemos con fake data
    request.flush(voices);
    controller.verify(); // verificar que no queden requests colgadas
    expect(actualVoices).toEqual(voices);
  });

  it('getVoices return error', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorEvent = new ErrorEvent('API error');

    let actualError: HttpErrorResponse | undefined;
    const expectedUrl = 'assets/model/voices.json';


    service.getVoices().pipe(
      catchError(error => {
        actualError = error;
        return EMPTY;
      }),
      tap((voices) => {
        fail('next handler must not be called');
      })
    ).subscribe();

    const request = controller.expectOne(expectedUrl);
    request.error(errorEvent, { status, statusText });
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);

  });
});
