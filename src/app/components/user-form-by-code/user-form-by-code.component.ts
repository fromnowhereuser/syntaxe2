import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {

  @Output('usercreate')
  usercreate = new EventEmitter<User>();

  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: fb.control(''),
      isAdmin: fb.control(false),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const user = new User('', false);
    Object.assign(user, this.userForm.value);
    this.usercreate.emit(user);
  }

}
