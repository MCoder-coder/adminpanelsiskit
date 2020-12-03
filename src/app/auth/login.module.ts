import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginRoutes } from './login.routes';

import { RegisterComponent } from './components/register/register.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LockComponent } from './components/lock/lock.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from "../shared/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,

  ]
})

export class LoginModule {}
