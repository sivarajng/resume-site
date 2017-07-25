import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { App, Portrait, Resume ,NavBar} from './components/index';
import { RouterModule, Routes } from '@angular/router';
// import { appRoutes } from './routes/routes';
import { CommonService, APIService, GlobalData } from './services/index';
import { HttpModule } from '@angular/http';
// import { MyResolver } from './services/resolve';

import { StartupService } from './startup';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}



import 'hammerjs';
// import $ from 'jquery';
declare var $: any;

@NgModule({
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , FormsModule
    , MdInputModule
    , MaterialModule
    , MdNativeDateModule
    , HttpModule
    // , appRoutes
    ],
  declarations: [
    App, Portrait, Resume,NavBar
  ],
  bootstrap: [
    App
  ],
  providers:
  [
    StartupService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }

    , GlobalData
    , CommonService
    , APIService]

})

export class AppModule { }