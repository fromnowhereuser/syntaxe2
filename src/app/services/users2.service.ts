import { Injectable } from '@angular/core';
import { UsersGenericService } from './users-generic.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map, toArray } from 'rxjs/operators';
import { plainToClass } from "class-transformer";

@Injectable({
  providedIn: 'root'
})
export class Users2Service implements UsersGenericService {

  private url = 'http://91.121.148.187:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  getAllAsync(): Observable<User[]> {
    // return this
    // .http
    // .get<Object[]>(this.url)
    // .pipe(
    //   switchMap(val => val),
    //   map(val => {
    //     const user = new User('', false);
    //     Object.assign(user, val);
    //     return user;
    //   }),
    //   toArray()
    // );

    return this
      .http
      .get<Object[]>(this.url)
      .pipe(
        map(tab => plainToClass(User, tab))
      );
  }

  getAll(): User[] {

    return [];
  }
  addUser(user: User) {
    //https://angular.io/guide/http
    this.http.post(this.url, user)
    .subscribe(val => console.log(val));
  }
}
