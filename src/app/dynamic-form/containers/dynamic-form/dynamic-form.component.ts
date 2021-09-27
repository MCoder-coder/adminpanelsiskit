import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { title } from 'process';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    exportAs: 'dynamicForm',
    selector: 'dynamic-form',
    styleUrls: ['dynamic-form.component.css'],
    templateUrl: 'dynamic-form.component.html',
    //   template: `
    //     <form
    //       class="dynamic-form"
    //       [formGroup]="form"
    //       (submit)="handleSubmit($event)">
    //       <ng-container
    ////

    //         dynamicField
    //         [config]="field"
    //         [group]="form">
    //       </ng-container>
    //     </form>
    //   `
})

/**
 * El contenedor principal
 * El punto de entrada de nuestro formulario dinámico es el contenedor principal.
 *  Este será el único componente que será expuesto por nuestro módulo de formularios dinámicos,
 * siendo responsable de aceptar una configuración de formulario y crear el formulario.
 */
export class DynamicFormComponent implements OnChanges {
    //configuracion de la interface FieldConfig , como estaria configurado el formulario
    @Input()
    config: FieldConfig[] = [];
    /**
     * Esta es una matriz de objetos que contienen información sobre los campos que queremos en nuestro formulario.
     *  Los diferentes tipos de campos tienen diferentes propiedades
     */

    // EventEmitter se usa emitir eventos personalizados de forma sincrónica o asincrónica, y registre controladores para esos eventos suscribiéndose a una instancia. @Output
    @Output() // proporciona metadatos de configuración
    submit: EventEmitter<any> = new EventEmitter<any>();

    //fomGroup
    form: FormGroup;

    get controls() {
        return this.config.filter(({ type }) => type );
    }
    get changes() {
        return this.form.valueChanges;
    }
    get valid() {
        return this.form.valid;
    }
    get value() {
        return this.form.value;
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.createGroup();
    }

    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map((item) => item.name);
           // console.log('configControls Map dynamic form', configControls);
            controls
                .filter((control) => configControls.includes(control))
                .forEach((control) => this.form.removeControl(control));

            configControls
                .filter((control) => !controls.includes(control))
                .forEach((name) => {
                    const config = this.config.find(
                        (control) => control.name === name
                    );

                    console.log("name" , name)

                    this.form.addControl(name, this.createControl(config));

                });
            console.log('configControls name', configControls);
        }
    }

    /**
     * Para cada elemento de la configuración, esperamos que el objeto contenga al menos dos propiedades: typey name. Esto nos dice cuál es el tipo de campo (entrada, selección, botón, etc.) y cómo se llama.
     * En el interior createGroup, recorremos estos elementos y creamos un nuevo control para cada uno.
     * Luego agregamos estos controles creados dinámicamente al grupo de formularios, listos para el consumo por nuestros campos dinámicos.
     *
     */
    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach((control) =>
            group.addControl(control.name, this.createControl(control))
        );
       // console.log('group', group);
        return group;
    }


    getControlForm(name : string){
        this.form.get(name)?.invalid  && this.form.get(name)?.touched;
    }


    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        let control = this.fb.control({ disabled, value }, validation);
        console.log('createControl', control);
        return control;
    }




    handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }

    // setDisabled(name: string, disable: boolean) {
    //     if (this.form.controls[name]) {
    //         const method = disable ? 'disable' : 'enable';
    //         this.form.controls[name][method]();
    //         return;
    //     }

    //     this.config = this.config.map((item) => {
    //         if (item.name === name) {
    //             item.disabled = disable;
    //         }
    //         return item;
    //     });
    // }






    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }
}
