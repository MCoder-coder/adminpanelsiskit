import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-date',
    template: `
        <div class="row">
            <div class="col-md-12 mr-auto">

                <mat-form-field dynamic-field app-form-date [formGroup]="group">
                    <input
                    [formControlName]="config.name"
                        matInput
                        [matDatepicker]="picker"
                        [placeholder]="config.name"
                        (click)="picker.open()"

                    />
                    <mat-datepicker-toggle
                        matSuffix
                        [for]="picker"
                    ></mat-datepicker-toggle>
                    <mat-datepicker #picker></mat-datepicker>
                </mat-form-field>
            </div>
        </div>
    `,
    styleUrls: ['./form-date.component.css'],
})
export class FormDateComponent implements OnInit {


//     <div
//     class="dynamic-field form-button"
//     [formGroup]="group">
//     <button
//       [disabled]="config.disabled"
//       type="submit">
//       {{ config.label }}
//     </button>
//   </div>
    config: FieldConfigOption;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
