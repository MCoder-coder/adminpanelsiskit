import { Component, Input, OnInit } from '@angular/core';
import { TableData } from 'src/app/md/md-table/md-table.component';

@Component({
  selector: 'app-table-contenedor',
  templateUrl: './table-contenedor.component.html',
  styleUrls: ['./table-contenedor.component.css']
})
export class TableContenedorComponent implements OnInit {

    @Input()
    tableData: TableData;

  constructor() { }

  ngOnInit(): void {
  }

}
