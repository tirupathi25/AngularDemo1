import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { FuturedAppsComponent } from './futured-apps/futured-apps.component';
import {routing} from './app.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component'
@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    FuturedAppsComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
