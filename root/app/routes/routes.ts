import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


import {Dashboard,Tasks,Projects,BlazerLevel} from '../components/index';

const router: Routes=[
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{path:'dashboard',component:Dashboard},
{path:'tasks',component:Tasks},
{path:'projects',component:Projects},
{path:'blazerLevel',component:BlazerLevel}

];



export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);
// export const appRoutes = RouterModule.forRoot(router);