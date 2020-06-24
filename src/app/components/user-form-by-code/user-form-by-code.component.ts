import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  nameCtrl: FormControl;


  constructor(fb: FormBuilder) {

    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);


    this.userForm = fb.group({
      name: this.nameCtrl,
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
