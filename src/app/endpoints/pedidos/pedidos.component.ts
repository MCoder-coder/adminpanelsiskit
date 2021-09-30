import { Component, OnInit, ViewChild } from '@angular/core';
import { TableData } from 'src/app/tables-dynamic/table-data';



@Component({
  selector: 'app-pedidos',
  template: `
    <app-table-contenedor
        [tableData]="tableData"
    >

    </app-table-contenedor>
  `,
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {



    //tableData: TableData;
    tableData: any;
  constructor() { }

  ngOnInit(): void {

    this.tableData = ["hola"]

  }

}
