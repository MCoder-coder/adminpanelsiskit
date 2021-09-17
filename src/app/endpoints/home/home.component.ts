import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-home',
  template:`
  <div class="app">
    <dynamic-form
      [config]="config"
      #form="dynamicForm"
      (submit)="submit($event)">
    </dynamic-form>
    {{ form.valid }}
    {{ form.value | json }}
  </div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit , OnInit {

@ViewChild(DynamicFormComponent) form: DynamicFormComponent;


  constructor() { }
    ngOnInit(): void {
       // throw new Error('Method not implemented.');
    }

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];



    ngAfterViewInit(): void {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
          if (this.form.valid !== previousValid) {
            previousValid = this.form.valid;
            this.form.setDisabled('submit', !previousValid);
          }
        });

        //this.form.setDisabled('submit', true);
       // this.form.setValue('name', 'Todd Motto');
      }

      submit(value: {[name: string]: any}) {
        console.log(value);
      }






}
