import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponentsDynamicComponent } from './base-components-dynamic/base-components-dynamic.component';
import { TableSimpleComponent } from './table-simple/table-simple.component';
import { FormComponent } from './form/form.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './fields/textbox/list/list.component';



@NgModule({
  declarations: [BaseComponentsDynamicComponent, TableSimpleComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormModule,
    FormsModule
  ],
  exports:[
    BaseComponentsDynamicComponent ,
  ]
})
export class DynamicComponenetsModule { }
