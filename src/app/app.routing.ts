import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import{NewsfeedComponent} from './newsfeed/newsfeed.component';
import{FuturedAppsComponent} from'./futured-apps/futured-apps.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'

const appRoutes : Routes = [
    
    {
        path : '',
        component:RegistrationFormComponent
    },
    {
        path:'futureapps',
        component:FuturedAppsComponent
    },
    {
        path:'newsfeed',
        component:NewsfeedComponent
    },
    {
        path:'home',
        component:RegistrationFormComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);