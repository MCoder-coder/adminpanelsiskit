import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-pedidos',
  template: `
    <app-table-contenedor

    >

    </app-table-contenedor>
  `,
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {



//tableData: TableData;

  constructor() { }

  ngOnInit(): void {
     // this.table.tableData["one"]
  }

}
