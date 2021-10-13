import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { BaseComponentsDynamicComponent } from '../base-components-dynamic/base-components-dynamic.component';

export abstract class DataList {
    public dataHead: [];
    public dataColum: [];
    public config : FieldConfig
}

@Component({
    selector: 'app-table-simple',
    templateUrl: './table-simple.component.html',
    styleUrls: ['./table-simple.component.css'],
})
export class TableSimpleComponent implements OnInit {

    currentStyle
    @Input() dataHead
    @Input() dataColum
    constructor() {}

    ngOnInit(): void {
        //this.currentStyle

    }

    public onChangeAlbumDisplayClick($event) {

        this.currentStyle = $event
        localStorage.setItem("estilo" , $event)
        console.log($event);

    }



    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.currentStyle
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

    }
}
