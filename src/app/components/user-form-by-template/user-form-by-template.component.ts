import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.scss']
})
export class UserFormByTemplateComponent implements OnInit {
  public user = new User('', false);

  constructor() {

    setInterval(() => {
      this.user.name = "modif"
    }, 2000);
  }

  ngOnInit(): void {
  }

  submit(userData: any) {
    console.log(userData);
  }
}
