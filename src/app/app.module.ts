import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoNothingDirective,
    ZoomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
