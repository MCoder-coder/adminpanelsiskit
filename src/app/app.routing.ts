
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuardService } from './layouts/services/guard/auth-guard.service';
import { GuestGuardService } from './layouts/services/guard/guest-guard.service';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      canActivate: [ AuthGuardService],
    }, {
      path: '',
      component: AdminLayoutComponent,
      canActivate: [ AuthGuardService],
      children: [
          {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        //loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'components',
        loadChildren : () => import('./components/components.module').then(m => m.ComponentsModule)
        //loadChildren: './components/components.module#ComponentsModule'
    }, {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.Forms)
        //loadChildren: './forms/forms.module#Forms'
    }, {
        path: 'tables',
        loadChildren : () => import ('./tables/tables.module').then(m => m.TablesModule)
        //loadChildren: './tables/tables.module#TablesModule'
    }, {
        path: 'maps',
        loadChildren : () => import('./maps/maps.module').then(m => m.MapsModule)
        //loadChildren: './maps/maps.module#MapsModule'
    }, {
        path: 'widgets',
        loadChildren : () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
        //loadChildren: './widgets/widgets.module#WidgetsModule'
    }, {
        path: 'charts',
        loadChildren : () => import('./charts/charts.module').then(m => m.ChartsModule)
        //loadChildren: './charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
       // loadChildren: './calendar/calendar.module#CalendarModule'
    }, {
        path: '',
        loadChildren: () => import('./userpage/user.module').then(m => m.UserModule)
       // loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren : () => import('./timeline/timeline.module').then(m => m.TimelineModule)
       // loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]}, {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren : () => import('./pages/pages.module').then(m => m.PagesModule),
        //loadChildren: './pages/pages.module#PagesModule',
        //canActivate: [ GuestGuardService ]
      }]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, {

         preloadingStrategy: PreloadAllModules,
  })],
    exports: [RouterModule]
  })

  export class AppRoutingModule  {


}
