import { AppApiService } from './app-api.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  resourceName = 'users';

  constructor(private appApi: AppApiService) { }

  getUsers(): Observable<any[]> {
    // Como sei q o Response é um array de elementos json, vou converter a resposta nisso
    return this.appApi.get(this.resourceName)
      .map((response: Response) => Array.from(response.json())); 
  }

}
