import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Type,
    ViewContainerRef,
} from '@angular/core';


import { TableData } from '../table-data';

import { TableExtendedSimpleComponent } from './table-extended-simple/table-extended-simple.component';
import { TablePlainComponent } from './table-plain/table-plain.component';



@Directive({
    selector: '[appTable]',
})
export class TableDirective implements OnInit , OnDestroy {

    @Input()
    tableData: any;

    @Input()
    table : TableData

     //el componente hacer referencian al modelo Field
     componentRef: ComponentRef<TableExtendedSimpleComponent>;

    constructor(
        private resolver: ComponentFactoryResolver,
        //Representa un contenedor donde se pueden adjuntar una o más vistas a un componente
        private viewContainerRef: ViewContainerRef
    ) {}



    ngOnInit(): void {


        const factory = this.resolver.resolveComponentFactory(TableExtendedSimpleComponent)
        this.viewContainerRef.clear()
        this.componentRef = this.viewContainerRef.createComponent(factory)


        this.componentRef.instance.tableData = this.tableData

        console.log(this.componentRef)

    }


    ngOnDestroy(): void {
        this.componentRef.destroy()
    }

}
