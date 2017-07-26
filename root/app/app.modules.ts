import { NgModule, APP_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,

} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';


import {
  App
  , Portrait
  , Resume
  , NavBar
  , Home
  , Skills
  , Certifications
  , Experience
  , Academy
  , Projects
} from './components/index';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes/routes';
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
  exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ]
})
export class AppMaterialModule { }

@NgModule({
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , FormsModule
    , MdInputModule
    , AppMaterialModule
    , HttpModule
    , appRoutes
  ],
  declarations: [
    App
    , Portrait
    , Resume
    , NavBar
    , Home
    , Skills
    , Certifications
    , Experience
    , Academy
    , Projects
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