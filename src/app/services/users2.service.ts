import { Injectable } from '@angular/core';
import { UsersGenericService } from './users-generic.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users2Service implements UsersGenericService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getAllAsync(): Observable<User[]> {
    return this.http.get<Object[]>(this.url);
  }

  getAll(): User[] {

    return [];
  }
  addUser(user: User) {
  }
}
