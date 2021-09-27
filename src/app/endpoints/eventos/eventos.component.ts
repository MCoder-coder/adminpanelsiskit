import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventosOptionsFieldService } from 'src/app/core/services/eventos-options-field.service';
import { EventosService } from 'src/app/core/services/eventos.service';
import { RowConfig } from 'src/app/core/services/models/row-config';
import { DynamicFormComponent } from 'src/app/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';


import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
    selector: 'app-eventos',
    templateUrl: 'eventos.component.html',
    styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {

    fieldConfig : FieldConfig [] = []
    rowConfig : RowConfig  [] =  []

    tableData = {
        headerRow: [ ],
        dataRows: [ ]
     };

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(this.tableData.dataRows);


    constructor(private eventosService : EventosService , private eventosFieldOptionService : EventosOptionsFieldService) {}

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {

        this.getFormOption()
        this.getEventos()

        this.dataSource.sort = this.sort;

    }

    getEventos(){
        this.eventosService.getEventos().subscribe((resEventos : any) => {

            this.tableData.dataRows = resEventos
            console.log(resEventos)
        })
    }


    getFormOption(){

        this.eventosFieldOptionService.getFieldOption().subscribe(responseField =>{

            //this.config = responseField as FieldConfig[]
            console.log(responseField)
            this.tableData.headerRow = responseField


        })
    }
}
