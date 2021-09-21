import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-textarea',
    template: `

    <mat-form-field dynamic-field  app-form-textarea class="example-full-width" [formGroup]="group"  >
        <textarea matInput [formControlName]="config.name"  [type]="config.type" [placeholder]="config.name"></textarea>
    </mat-form-field>

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
}
