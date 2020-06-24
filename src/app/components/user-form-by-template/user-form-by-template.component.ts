import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.scss']
})
export class UserFormByTemplateComponent implements OnInit {
  public user = new User('', false);

  @Output('usercreate')
  usercreate = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(userData: any) {
    const user = new User('', false);
    Object.assign(user, this.user);
    this.usercreate.emit(user);
  }
}
