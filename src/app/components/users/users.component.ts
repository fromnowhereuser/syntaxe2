import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    appConfig: AppConfig
  ) { }

  ngOnInit(): void {
  }

}
