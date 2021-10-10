import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractListComponent } from './abstract-list/abstract-list.component';
import { BaseListComponent } from './base-list/base-list.component';
import { FormComponent } from './form/form.component';
import { TableListComponent } from './table-list.component';
import { TableExtendedSimpleListComponent } from './table-extended-simple-list/table-extended-simple-list.component';



@NgModule({
  declarations: [TableListComponent, AbstractListComponent, BaseListComponent, FormComponent, TableExtendedSimpleListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TableListComponent
  ]
})
export class TableListModule { }
