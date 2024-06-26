import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  searchWeather(name: string): Observable<any> {
    const uri = `https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric`;
    const params = new HttpParams({ fromString: `q=${name}` });
    return this.httpClient.request('GET', uri, {
      responseType: 'json',
      params,
    });
    // const uri = `https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=${name}`;
    // // const params = new HttpParams({ fromString: `q=${name}` });
    // return this.httpClient.request('GET', uri, {
    //   responseType: 'json',
    //   // params,
    // });
  }
}
