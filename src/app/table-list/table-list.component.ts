import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractListComponent } from './abstract-list/abstract-list.component';



export abstract class AbstractList {
    public albumListToRender: [];
  }


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


    public currentStyle = '';
    public albumList: [] = [];
    contentStyles: any;


  constructor( ) { }



    ngOnInit(): void {
    }


    public onChangeAlbumDisplayClick($event) {
        this.currentStyle = $event;

        console.log($event)
    }





}
