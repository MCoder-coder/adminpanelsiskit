import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormTextboxComponent } from './components/form-textbox/form-textbox.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormFileComponent } from './components/form-file/form-file.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
    declarations: [
        DynamicFormComponent,
        FormTextboxComponent,
        FormTextareaComponent,
        FormDateComponent,
        FormFileComponent,
        FormButtonComponent,

        DynamicFieldDirective,

        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule , MaterialModule],
    exports: [DynamicFormComponent , DynamicFieldDirective],

    /**
     * Cuando queremos que un componente se pueda crear dinámicamente,
     *  debemos informar a Angular para que pueda exponernos las fábricas de componentes.
     * Para hacer esto, podemos utilizar una propiedad dentro de nuestra @NgModule()configuración - entryComponents.
     * Esta es una matriz de componentes que Angular nos expondrá.
     */
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
    ],
})
export class DynamicFormModule {}
