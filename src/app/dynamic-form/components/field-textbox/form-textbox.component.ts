import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Config } from 'protractor';

@Component({
    selector: 'app-form-textbox',
    template: `
        <div dynamic-field app-form-textbox>
            <div>
                <mat-form-field
                    class="form-group"
                    [formGroup]="group"
                    class="example-full-width"
                >
                    <input
                        matInput
                        [placeholder]="config.name"
                        [formControlName]="config.name"
                        [type]="config.type"
                        [class.is-valid]="fieldValid(config.name)"
                        [class.is-invalid]="fieldNoValid(config.name)"
                    />
                </mat-form-field>
                <mat-error
                    [class.active]="fieldNoValid(config.name)"
                    *ngIf="group.controls[config.name]?.touched"
                >
                    <span *ngIf="group?.controls[config.name].errors?.required"
                        >Campo Requerido</span
                    >
                    <span
                        *ngIf="group?.controls[config.name]?.errors?.minLength"
                        >Minimum Length is 5</span
                    >
                </mat-error>
            </div>
        </div>
    `,
    styleUrls: ['./form-textbox.component.css'],
})
export class FormTextboxComponent implements OnInit {
    config: FieldConfig;
    group: FormGroup;
    configName: any;
    constructor() {}

    ngOnInit(): void {
        console.log(this.group?.controls[this.config.name]?.touched);
        this.configName = this.config.name;
        //  this.fieldNoValid(this.config.name)
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
