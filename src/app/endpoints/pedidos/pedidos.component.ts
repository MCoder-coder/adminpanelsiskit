import {
    Component,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { TableExtendedSimpleComponent } from 'src/app/tables-dynamic/components/table-extended-simple/table-extended-simple.component';
import { TableData } from 'src/app/tables-dynamic/table-data';
import { EventEmitter } from 'stream';

@Component({
    selector: 'app-pedidos',
    templateUrl: 'pedidos.component.html',
    styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
    defaultOption;

    template;
    optionTemplateRef;
    selectedTemplate;
    datahead;
    dataColum;
    //tableData: TableData;
    tableData: any;

    currentStyle
    constructor() {}

    ngOnInit(): void {
        this.currentStyle = localStorage.getItem("estilo")

    }

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

    }

    back(){
        this.currentStyle = localStorage.removeItem("estilo")
    }
}
