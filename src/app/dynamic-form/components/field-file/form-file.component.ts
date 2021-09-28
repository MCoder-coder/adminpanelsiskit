import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    selector: 'app-form-file',
    template: `
        <div class="row" dynamic-field app-form-file>
            <div class="col-md-4 col-sm-4" [formGroup]="group">
                <legend>{{config.name}}</legend>
                <div
                    class="fileinput fileinput-new text-center"
                    data-provides="fileinput"
                >
                    <div class="fileinput-new thumbnail">
                        <img
                            src="./assets/img/image_placeholder.jpg"
                            alt="..."
                        />
                    </div>
                    <div
                        class="fileinput-preview fileinput-exists thumbnail"
                    ></div>
                    <div>
                        <span class="btn btn-rose btn-round btn-file">
                            <span class="fileinput-new">{{config.title}}</span>
                            <span class="fileinput-exists">Change</span>
                            <input [formControlName]="config.name"  type="file" name="..." />
                        </span>
                        <a
                            href="#pablo"
                            class="btn btn-danger btn-round fileinput-exists"
                            data-dismiss="fileinput"
                            ><i class="fa fa-times"></i> Remove</a
                        >
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./form-file.component.css'],
})
export class FormFileComponent implements OnInit {
    config: FieldConfig;
    group: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}
