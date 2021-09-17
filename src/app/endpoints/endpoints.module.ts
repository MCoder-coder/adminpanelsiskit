import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, EventosComponent, PedidosComponent ,   ],
  imports: [
    CommonModule,
    EndpointsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
  ],

})
export class EndpointsModule { }
