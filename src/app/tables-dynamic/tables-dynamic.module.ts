import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExtendedSimpleComponent } from './components/table-extended-simple/table-extended-simple.component';
import { TablePlainComponent } from './components/table-plain/table-plain.component';
import { TableDirective } from './components/table.directive';

import { TableContenedorComponent } from './containers/table-contenedor/table-contenedor.component';



@NgModule({
  declarations: [TableExtendedSimpleComponent, TablePlainComponent, TableDirective,  TableContenedorComponent],
  imports: [
    CommonModule
  ],
  exports: [TableDirective , TableContenedorComponent ]
})
export class TablesDynamicModule { }
