import { Injectable } from '@angular/core';
import { UsersGenericService } from './users-generic.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class Users2Service implements UsersGenericService{

  constructor() { }


  getAll(): User[] {

    return [];
  }
  addUser(user: User) {
  }
}
