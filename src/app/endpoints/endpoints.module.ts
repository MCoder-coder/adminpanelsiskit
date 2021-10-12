import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointsRoutingModule } from './endpoints-routing.module';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { TablesModule } from '../tables/tables.module';
import { TablesDynamicModule } from '../tables-dynamic/tables-dynamic.module';
import { TableListModule } from '../table-list/table-list.module';
import { DynamicComponenetsModule } from '../dynamic-componenets/dynamic-componenets.module';



@NgModule({
  declarations: [HomeComponent, EventosComponent, PedidosComponent ,   ],
  imports: [
    CommonModule,
    EndpointsRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    FormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    TablesDynamicModule,
    TableListModule,

    DynamicComponenetsModule
  ],

})
export class EndpointsModule { }
