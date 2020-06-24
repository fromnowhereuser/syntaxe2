import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { UsersGenericService } from './users-generic.service';
import { Observable, from } from 'rxjs';

@Injectable()
export class UsersService implements UsersGenericService {
  private users = new Array<User>();

  constructor(
    private api: ApiService
  ) { }
  getAllAsync(): Observable<User[]> {
    return from([]);
  }

  public getAll(): Array<User> {
    return this.users;
  }

  public addUser(user: User) {
    this.users.push(user);
  }
}
