import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { TableExtendedSimpleComponent } from '../../components/table-extended-simple/table-extended-simple.component';

@Component({

  selector: 'app-table-contenedor',
  templateUrl: './table-contenedor.component.html',
  styleUrls: ['./table-contenedor.component.css']
})
export class TableContenedorComponent implements OnInit {




    @Input()
    dataHead: any;

  constructor(private vref:ViewContainerRef) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

  }



}
