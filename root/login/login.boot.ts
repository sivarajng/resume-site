import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { LoginModule } from './login.modules';

enableProdMode(); 
platformBrowserDynamic().bootstrapModule(LoginModule);