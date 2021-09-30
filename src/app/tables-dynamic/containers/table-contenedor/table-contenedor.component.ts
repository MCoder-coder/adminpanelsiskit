import { Component, Input, OnInit } from '@angular/core';
import { TableData } from 'src/app/md/md-table/md-table.component';

@Component({
    exportAs: 'app-table-contenedor',
  selector: 'app-table-contenedor',
  template: `<div class="main-content">
  <div class="container-fluid" appTable>

      <ng-container
        appTable
        class="app-table-contenedor"

        *ngFor="let item of tableData"
        [tableData]="tableData"

      >
      </ng-container>

  </div>
</div>
`,
  styleUrls: ['./table-contenedor.component.css']
})
export class TableContenedorComponent implements OnInit {

    @Input()
    tableData: any;

  constructor() { }

  ngOnInit(): void {
      console.log(this.tableData)
  }



}
