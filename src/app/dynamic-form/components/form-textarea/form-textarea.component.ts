import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-textarea',
    template: `
        <mat-form-field
            dynamic-field
            app-form-textarea
            class="example-full-width"
            [formGroup]="group"
        >
            <textarea
                matInput
                [formControlName]="config.name"
                [type]="config.type"
                [placeholder]="config.name"
                [class.is-valid]="fieldValid(config.name)"
                [class.is-invalid]="fieldNoValid(config.name)"
            ></textarea>
        </mat-form-field>
        <mat-error
            [class.active]="fieldNoValid(config.name)"
            *ngIf="group.controls[config.name]?.touched"
        >
            <span *ngIf="group?.controls[config.name].errors?.required"
                >Campo Requerido</span
            >
            <span *ngIf="group?.controls[config.name]?.errors?.minLength"
                >Minimum Length is 5</span
            >
        </mat-error>
    `,
    styleUrls: ['./form-textarea.component.css'],
})
export class FormTextareaComponent implements OnInit {
    config: FieldConfigOption;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {
        // console.log("config textarea" , this.config)
    }

    //validador de campos no validos genericos formControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldNoValid(field: string) {
        //retorno dependiendo el field verifico si es invalid o es touched
        return this.group.get(field)?.invalid && this.group.get(field)?.touched;
    }

    //validador de campos validos genericos groupControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldValid(field: string) {
        //retorno dependiendo el field verifico si es valid o es touched
        return this.group.get(field)?.valid && this.group.get(field)?.touched;
    }
}
