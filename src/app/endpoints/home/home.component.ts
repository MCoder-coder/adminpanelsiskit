import { tap, map } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { EventosOptionsFieldService } from 'src/app/core/services/eventos-options-field.service';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { filter } from 'rxjs-compat/operator/filter';
import { config } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {


    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    constructor(private eventosFieldOptionService : EventosOptionsFieldService) {

    }
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.getFormOption()



    }

    config: FieldConfig[] = [ ];

    ngAfterViewInit(): void {
         let previousValid = this.form.valid;
         this.form.changes.subscribe((changes) => {

            console.log("cambios" , changes)
             if (this.form.valid !== previousValid) {
                 previousValid = this.form.valid;
                // this.form.setDisabled('submit', !previousValid);

             }
         });

    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }




    getFormOption(){
        this.eventosFieldOptionService.getFieldOption().subscribe(responseField =>{

            //this.config = responseField as FieldConfig[]
            this.config = responseField as FieldConfig[]
            this.config.filter((fieldFilter: any) => {

                fieldFilter.validation = [Validators.required ]

               // fieldFilter.validation = [Validators.required]
                //this.form.ge
              //  this.fieldNoValid(fieldFilter.name)
               console.log("filter" ,fieldFilter  )
            })
           console.log("fieldResponse" , responseField)

        })
    }



    //validador de campos no validos genericos formControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldNoValid(field: string) {
        //retorno dependiendo el field verifico si es invalid o es touched
        return this.form.form.get(field)?.invalid && this.form.form.get(field)?.touched;
    }

    //validador de campos validos genericos formControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldValid(field: string) {
        //retorno dependiendo el field verifico si es valid o es touched
        return this.form.form.get(field)?.valid && this.form.form.get(field)?.touched;
    }
}
