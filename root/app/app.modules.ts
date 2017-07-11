import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent, SideNav, NavBar, RouterView, Dashboard, Tasks, Projects,StatusFilterPipe,BlazerLevel } from './components/index';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes/routes';
import { CommonService, APIService ,GlobalData} from './services/index';
import { HttpModule } from '@angular/http';



import 'hammerjs';
// import $ from 'jquery';
declare var $: any;

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, MdInputModule, MaterialModule, MdNativeDateModule, appRoutes, HttpModule

  ],
  declarations: [
    AppComponent, SideNav, NavBar, RouterView, Dashboard, Tasks, Projects,StatusFilterPipe,BlazerLevel
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CommonService, APIService ,GlobalData]

})

export class AppModule {





}