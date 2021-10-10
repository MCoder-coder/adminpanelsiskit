import { Component, OnInit } from '@angular/core';

export abstract class AbstractList {
    public albumListToRender: [];
  }

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.css']
})
export class AbstractListComponent implements OnInit {

    public albumListToRender: [];

  constructor() { }

  ngOnInit(): void {
  }

}
