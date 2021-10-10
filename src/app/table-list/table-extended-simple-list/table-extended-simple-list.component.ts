import { Component, OnInit } from '@angular/core';
import { AbstractListComponent } from '../abstract-list/abstract-list.component';
import { TableListComponent } from '../table-list.component';

@Component({
  selector: 'app-table-extended-simple-list',
  templateUrl: './table-extended-simple-list.component.html',
  styleUrls: ['./table-extended-simple-list.component.css']
})
export class TableExtendedSimpleListComponent extends AbstractListComponent {

    constructor() {
        super();
      }

}
