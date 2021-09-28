import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { FormButtonComponent } from './components/field-button/form-button.component';
import { FormDateComponent } from './components/field-date/form-date.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormFileComponent } from './components/field-file/form-file.component';
import { FormInputComponent } from './components/field-input/form-input.component';
import { FormTextboxComponent } from './components/field-textbox/form-textbox.component';

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
    // entryComponents: [
    //     FormButtonComponent,
    //     FormInputComponent,
    //     FormSelectComponent,
    // ],
})
export class DynamicFormModule {}
