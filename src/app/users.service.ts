import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  resourceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUsers(): Observable<any[]> {
    // Como sei q o Response é um array de elementos json, vou converter a resposta nisso
    return this.http.get(this.resourceUrl)
      .map((response: Response) => Array.from(response.json())); 
  }

}
