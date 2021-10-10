import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableExtendedSimpleComponent } from 'src/app/tables-dynamic/components/table-extended-simple/table-extended-simple.component';
import { TableData } from 'src/app/tables-dynamic/table-data';



@Component({
  selector: 'app-pedidos',
  template: `
    <div class="main-content">
    <div class="container-fluid" >

    <app-table-extended-simple [dataColum]="dataColum" [dataHead]="datahead">
    <div *cardItem="let itemrow">
        {{itemrow}}

	</div>
    <ng-container *dataColumItem="let row">

        {{row}}

        </ng-container>
    </app-table-extended-simple>


    </div>
  </div>
  <app-table-list></app-table-list>

  `,
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
    defaultOption

    template
    optionTemplateRef
    selectedTemplate
    datahead
    dataColum
    //tableData: TableData;
    tableData: any;
  constructor() { }

  ngOnInit(): void {
    this.datahead = [ 'Name', 'Country', 'City', 'Salary']
    this.dataColum = [
        ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
    ]
  }

}
