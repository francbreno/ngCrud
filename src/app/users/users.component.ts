import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<any[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}
