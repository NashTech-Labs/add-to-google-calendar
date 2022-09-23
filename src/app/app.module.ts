import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddToGoogleCalendarComponent } from './components/add-to-google-calendar/add-to-google-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToGoogleCalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
