import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-textbox',
    template: `
        <div dynamic-field app-form-textbox >
            <div >
                <mat-form-field class="form-group" [formGroup]="group" class="example-full-width">
                <input matInput [placeholder]="config.name" [formControlName]="config.name" [type]="config.type">
              </mat-form-field>
            </div>
        </div>
    `,
    styleUrls: ['./form-textbox.component.css'],
})
export class FormTextboxComponent implements OnInit {



    config: FieldConfigOption;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
