import { tap, map } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { EventosOptionsFieldService } from 'src/app/core/services/eventos-options-field.service';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { filter } from 'rxjs-compat/operator/filter';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {
    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    constructor(private eventosFieldOptionService : EventosOptionsFieldService) {}
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.getFormOption()
    }

    config: FieldConfig[] = [
        // {
        //     type: 'input',
        //     label: 'Full name',
        //     name: 'name',
        //     placeholder: 'Enter your name',
        //     validation: [Validators.required, Validators.minLength(4)],
        // },
        // {
        //     type: 'textarea',
        //     label: 'Full name',
        //     name: 'name',
        //     placeholder: 'Enter your name',
        //     validation: [Validators.required, Validators.minLength(4)],
        // },
        // {
        //     type: 'date',
        //     label: 'Full name',
        //     name: 'name',
        //     placeholder: 'Enter your name',
        //     validation: [Validators.required, Validators.minLength(4)],
        // },
        // {
        //     type: 'file',
        //     label: 'Full name',
        //     name: 'name',
        //     placeholder: 'Enter your name',
        //     validation: [Validators.required, Validators.minLength(4)],
        // },
        // {
        //     type: 'textbox',
        //     label: 'Full name',
        //     name: 'name',
        //     placeholder: 'Enter your name',
        //     validation: [Validators.required, Validators.minLength(4)],
        // },
        // {
        //     type: 'select',
        //     label: 'Favourite Food',
        //     name: 'food',
        //     options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
        //     placeholder: 'Select an option',
        //     validation: [Validators.required],
        // },
         {
             label: 'Submit',
             name: 'submit',
             type: 'button',
         },
    ];

    ngAfterViewInit(): void {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
            if (this.form.valid !== previousValid) {
                previousValid = this.form.valid;
                this.form.setDisabled('submit', !previousValid);
            }
        });

        // this.form.setDisabled('submit', true);
        //this.form.setValue('name', 'Todd Motto');
    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }


    getFormOption(){
        this.eventosFieldOptionService.getFieldOption().subscribe(responseField =>{


            this.config = responseField


            console.log("fieldResponse" , responseField)

        })
    }
}
