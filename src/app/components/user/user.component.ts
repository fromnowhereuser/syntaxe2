import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  
  @Input('user')
  public user: User;

  @Output('userSelect')
  userSelect = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  public select() {
    this.userSelect.emit(this.user);
  }

}
