import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { UsersGenericService } from './users-generic.service';

@Injectable()
export class UsersService implements UsersGenericService {
  private users = new Array<User>();

  constructor(
    private api: ApiService
  ) { }

  public getAll(): Array<User> {
    return this.users;
  }

  public addUser(user: User) {
    this.users.push(user);
  }
}
