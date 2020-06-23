import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users.service';
import { UsersGenericService } from './services/users-generic.service';
import { Users2Service } from './services/users2.service';
import { AppConfig, CONFIG1 } from './app.config';
import { ApiService } from './services/api.service';
import { UserPipe } from './pipes/user.pipe';
import { UserFilterByNamePipe } from './pipes/user-filter-by-name.pipe';
import { UserFormByTemplateComponent } from './components/user-form-by-template/user-form-by-template.component';
import { UserFormByCodeComponent } from './components/user-form-by-code/user-form-by-code.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoNothingDirective,
    ZoomDirective,
    UsersComponent,
    UserPipe,
    UserFilterByNamePipe,
    UserFormByTemplateComponent,
    UserFormByCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    {
      provide: AppConfig,
      useValue: CONFIG1
    },

    // {
    //   provide: UsersGenericService,
    //   useClass: Users2Service
    // }, 
    {
      provide: UsersGenericService,
      deps: [AppConfig, ApiService],
      useFactory: (
        appConfig: AppConfig,
        api: ApiService
        ) => {
        if(appConfig.mode === 1 ) {
          return new UsersService(api);
        } else {
          return new Users2Service();
        }
      }
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
