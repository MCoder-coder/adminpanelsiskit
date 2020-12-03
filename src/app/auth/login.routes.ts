import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LockComponent } from './components/lock/lock.component';
import { LoginComponent } from './components/login/login.component';

export const LoginRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'registro',
            component: RegisterComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        }]
    }
];
