import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MdInputModule,MaterialModule, MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component.login';


@NgModule({
  imports: [
    BrowserModule,BrowserAnimationsModule,MdInputModule,MaterialModule, MdNativeDateModule
  
  ],
  declarations: [
    LoginComponent
  ],
  bootstrap: [
    LoginComponent
  ],
 
})

export class LoginModule {}