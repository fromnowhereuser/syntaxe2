import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  
  @Input('user')
  public user: User;

  @Output('userSelect')
  userSelect = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  public select() {
    this.userSelect.emit(this.user);
  }

}
