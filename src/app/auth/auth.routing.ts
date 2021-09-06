import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuestGuardService } from './services/guest-guard.service';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      canActivate: [ GuestGuardService ]
    }
];

export const AuthRoutes = RouterModule.forChild(routes);
