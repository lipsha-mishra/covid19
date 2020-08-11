import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { HeaderComponent } from './header/header.component';
import {CovidService} from './service/covid.service';
import {HttpModule} from '@angular/http';
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    CovidService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
