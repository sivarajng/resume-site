import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
} from '../components/index';

const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'skills', component: Skills },
    { path: 'certifications', component: Certifications },
    { path: 'experience', component: Experience },
    { path: 'academy', component: Academy },
    { path: 'projects', component: Projects },
   

];

// export const appRoutes: ModuleWithProviders = RouterModule.forRoot(router);
export const appRoutes = RouterModule.forRoot(router);