import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppApiService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}
  
  public get(resourceName: string): Observable<Response> {
    return this.http.get(`${this.baseUrl}/${resourceName}`);
  }
}