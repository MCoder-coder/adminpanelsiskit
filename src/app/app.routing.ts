import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './views/layouts/admin/admin-layout.component';



export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
       //loadChildren: '/views/dashboard/dashboard.module#DashboardModule'
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    }, {
        path: 'components',
        //loadChildren: './components/components.module#ComponentsModule'
        loadChildren: () => import('./views/template/components/components.module').then(m => m.ComponentsModule)
    }, {
        path: 'forms',
        //loadChildren: './forms/forms.module#Forms'
        loadChildren: () => import('./views/template/forms/forms.module').then(m => m.Forms)
    }, {
        path: 'tables',
        //loadChildren: './tables/tables.module#TablesModule'
        loadChildren: () => import('./views/template/tables/tables.module').then(m => m.TablesModule)
    }, {
        path: 'maps',
        //loadChildren: './maps/maps.module#MapsModule'
        loadChildren: () => import('./views/template/maps/maps.module').then(m => m.MapsModule)
    }, {
        path: 'widgets',
       // loadChildren: './widgets/widgets.module#WidgetsModule'
       loadChildren: () => import('./views/template/widgets/widgets.module').then(m => m.WidgetsModule)
    }, {
        path: 'charts',
     //   loadChildren: './charts/charts.module#ChartsModule'
     loadChildren: () => import('./views/template/charts/charts.module').then(m => m.ChartsModule)
    }, {
        path: 'calendar',
       // loadChildren: './calendar/calendar.module#CalendarModule'
       loadChildren: () => import('./views/template/calendar/calendar.module').then(m => m.CalendarModule)
    }, {
        path: '',
     //   loadChildren: './userpage/user.module#UserModule'
     loadChildren: () => import('./views/template/userpage/user.module').then(m => m.UserModule)
    }, {
        path: '',
       // loadChildren: './timeline/timeline.module#TimelineModule'
       loadChildren: () => import('./views/template/timeline/timeline.module').then(m => m.TimelineModule)
    }
  ]}, {
      path: '',
      component: AdminLayoutComponent,
      children: [{
        path: 'pages',
        //loadChildren: './pages/pages.module#PagesModule'
        loadChildren: () => import('./views/template/pages/pages.module').then(m => m.PagesModule)
      }]
    }
];
