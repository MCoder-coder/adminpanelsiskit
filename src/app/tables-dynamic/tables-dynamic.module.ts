import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExtendedSimpleComponent } from './components/table-extended-simple/table-extended-simple.component';
import { TablePlainComponent } from './components/table-plain/table-plain.component';


import { TableContenedorComponent } from './containers/table-contenedor/table-contenedor.component';
import { CardItemDirective } from './car-item.directive';
import { DataColumItemDirective } from './data-column.directive';



@NgModule({
  declarations: [TableExtendedSimpleComponent, TablePlainComponent,  TableContenedorComponent , CardItemDirective , DataColumItemDirective],
  imports: [
    CommonModule
  ],
  exports: [ TableContenedorComponent  , TableExtendedSimpleComponent , CardItemDirective , DataColumItemDirective]
})
export class TablesDynamicModule { }
