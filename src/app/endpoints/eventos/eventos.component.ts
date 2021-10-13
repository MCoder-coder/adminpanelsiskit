import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventosOptionsFieldService } from 'src/app/core/services/eventos-options-field.service';
import { EventosService } from 'src/app/core/services/eventos.service';
import { RowConfig } from 'src/app/core/services/models/row-config';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';


import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Validators } from '@angular/forms';
import { TableExtendedSimpleComponent } from 'src/app/tables-dynamic/components/table-extended-simple/table-extended-simple.component';
import { TableSimpleComponent } from 'src/app/dynamic-componenets/table-simple/table-simple.component';
@Component({
    selector: 'app-eventos',
    templateUrl: 'eventos.component.html',
    styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {

    @ViewChild(TableSimpleComponent) table: TableSimpleComponent;

    fieldConfig : FieldConfig [] = []
    rowConfig : RowConfig  [] =  []

    datahead
    dataColum
    tableData: any;
    data
    selectedTemplate
    config
    currentStyle
    constructor(private eventosService : EventosService , private eventosFieldOptionService : EventosOptionsFieldService , private vref:ViewContainerRef) {

    }

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

    }

    ngOnInit(): void {
        this.getFormOption()
        this.getEventos()
        this.currentStyle = "table"
    }

    getEventos(){
        this.eventosService.getEventos().subscribe((resEventos : any) => {

            this.dataColum= resEventos
            console.log(resEventos)
        })
    }


    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

    }

    getFormOption(){

        this.eventosFieldOptionService.getFieldOption().subscribe(responseField =>{

            //this.config = responseField as FieldConfig[]
            console.log(responseField)
           // this.tableData.headerRow = responseField

            this.datahead= responseField
            this.config = responseField as FieldConfig[]
            console.log(this.tableData)
            this.config.filter((fieldFilter: any) => {

                fieldFilter.validation = [Validators.required ]

               // fieldFilter.validation = [Validators.required]
                //this.form.ge
              //  this.fieldNoValid(fieldFilter.name)
               console.log("filter" ,fieldFilter  )
            })
        })
    }

    editClickFormTest(id : any){
        this.currentStyle = "form"
        console.log("click" , id)
    }


    back(){
        this.currentStyle = localStorage.removeItem("estilo")
    }
}
