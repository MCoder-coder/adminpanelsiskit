import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    config: any[] = [ ];
  constructor() { }

  ngOnInit(): void {
  }


  submit(value: { [name: string]: any }) {
    console.log(value);

    }

}
