import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedTablesImageComponent } from './componenets/extended-tables-image/extended-tables-image.component';
import { DynamicTablesComponent } from './containers/dynamic-tables/dynamic-tables.component';
import { DynamicTablesDirective } from './componenets/dynamic-tables/dynamic-tables.directive';




@NgModule({
  declarations: [ExtendedTablesImageComponent, DynamicTablesComponent, DynamicTablesDirective],
  imports: [
    CommonModule
  ]
})
export class DynamicTablesModule { }
