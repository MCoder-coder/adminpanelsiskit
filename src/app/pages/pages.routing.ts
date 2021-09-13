import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'register',
            component: RegisterComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(PagesRoutes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
 })
 export class PageRouting  {


}
