import { Component } from '@angular/core';
import { User } from './models/user';

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

  public users = new Array<User>();


  public srcImg = {
    url: 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk'
  }

  constructor() {

    this.title = {
      caption: 'syntaxe'
    };
  }

  public handleKeydown(event: KeyboardEvent) {
    console.log(event);
  }

  public handleUserSelect(user: User) {
    console.log(user);
    this.selectedUser = user;
  }


  public addUser(event: MouseEvent, input: HTMLInputElement): void {
    this.users.push(new User(input.value, false));
  }
}
