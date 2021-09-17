import { FieldConfigOption } from './../../models/field-config-option';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-textbox',
    template: `
        <div dynamic-field app-form-textbox class="col-sm-4" >
            <p>{{config.name}}</p>
            <div class="form-group" [formGroup]="group">
                <input
                [formControlName]="config.name"
                    type="textbox"
                    value=""
                    placeholder=""
                    class="form-control"
                />
            </div>
        </div>
    `,
    styleUrls: ['./form-textbox.component.css'],
})
export class FormTextboxComponent implements OnInit {


//     <div
//     class="dynamic-field form-select"
//     [formGroup]="group">
//     <label>{{ config.label }}</label>
//     <select [formControlName]="config.name">
//       <option value="">{{ config.placeholder }}</option>
//       <option *ngFor="let option of config.options">
//         {{ option }}
//       </option>
//     </select>
//   </div>

    config: FieldConfigOption;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
