import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-textarea',
    template: `
    <p>{{config.name}}</p>
    <mat-form-field dynamic-field app-form-textarea class="example-full-width dynamic-field app-form-textarea" [formGroup]="group"  >
        <textarea matInput type="textarea"  [attr.placeholder]="config.placeholder" [formControlName]="config.name"></textarea>
    </mat-form-field> `,
    styleUrls: ['./form-textarea.component.css'],
})
export class FormTextareaComponent implements OnInit {
    //     <div
    //     class="dynamic-field form-input"
    //     [formGroup]="group">
    //     <label>{{ config.label }}</label>
    //     <input
    //       type="text"
    //       [attr.placeholder]="config.placeholder"
    //       [formControlName]="config.name">
    //   </div>
    // `

    config: FieldConfigOption;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
