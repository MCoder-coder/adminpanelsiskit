import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
    {
        path: '',
        children: [ {
            path: 'eventos',
            component: EventosComponent
        }, {
            path: 'pedidos',
            component: PedidosComponent
        }, {
            path: 'home',
            component: HomeComponent
        }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndpointsRoutingModule { }
