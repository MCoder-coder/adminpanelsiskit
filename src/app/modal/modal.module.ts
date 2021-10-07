import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';



@NgModule({
  declarations: [ModalTemplateComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalTemplateComponent],

})
export class ModalModule { }
