import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [HomeComponent, EventosComponent, PedidosComponent],
  imports: [
    CommonModule,
    EndpointsRoutingModule
  ]
})
export class EndpointsModule { }
