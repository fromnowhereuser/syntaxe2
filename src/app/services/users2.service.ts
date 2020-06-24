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
export class Users2Service extends UsersGenericService {

  private url = 'http://91.121.148.187:8080/users';

  constructor(
    private http: HttpClient
  ) {
    super([]);
  }

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

    this
      .http
      .get<Object[]>(this.url)
      .pipe(
        map(tab => plainToClass(User, tab))
      ).subscribe(val => {
        this.next(val);
      })

    return this
      .http
      .get<Object[]>(this.url)
      .pipe(
        map(tab => plainToClass(User, tab))
      )

  }

  getAll(): User[] {
    return [];
  }

  addUser(user: User): Observable<User[]> | User[] {
    //https://angular.io/guide/http
    return this
      .http
      .post<User[]>(this.url, user)
      .pipe(
        map(tab => plainToClass(User, tab))
      )
  }
}
