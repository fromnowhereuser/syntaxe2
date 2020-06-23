import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users.service';
import { UsersGenericService } from './services/users-generic.service';
import { Users2Service } from './services/users2.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoNothingDirective,
    ZoomDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: UsersGenericService,
      useClass: Users2Service
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
