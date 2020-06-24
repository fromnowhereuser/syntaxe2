import { Component } from '@angular/core';
import { User } from './models/user';
import { UsersGenericService } from './services/users-generic.service';
import { of, from } from 'rxjs';
import { map, reduce, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any;
  public version = 1;
  public show: boolean;
  public color = '#00ffd087'
  public selectedUser: User = undefined;
  public myDate = new Date();
  public filterName = "";

  constructor(
    public usersService: UsersGenericService
  ) {
    this.title = {
      caption: 'syntaxe'
    };
    
    from([1, 2, 3])
      .pipe(
        map(val => val * 2),
        reduce((acc, val) => acc + val)
      )
      .subscribe(val => console.log(val));


    of([1, 2, 3])
      .pipe(
        switchMap(val => val),
        map(val => val * 2),
        reduce((acc, val) => acc + val)
      )
      .subscribe(val => console.log(val));

  }

  public handleKeydown(event: KeyboardEvent) {
    console.log(event);
  }

  public handleUserSelect(user: User) {
    console.log(user);
    this.selectedUser = user;
  }


  public addUser(event: MouseEvent, input: HTMLInputElement): void {
    this.usersService.addUser(new User(input.value, false));
  }
}
