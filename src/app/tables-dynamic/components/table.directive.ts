import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    Type,
    ViewContainerRef,
} from '@angular/core';
import { TableExtendedSimpleComponent } from './table-extended-simple/table-extended-simple.component';
import { TablePlainComponent } from './table-plain/table-plain.component';

declare interface TableData {
    headerRow?: [];
    dataRows?: [];
}

const components: { [type: string]: Type<TableData> } = {
    tablesimple: TableExtendedSimpleComponent,

};



@Directive({
    selector: '[appTable]',
})
export class TableDirective implements OnChanges, OnInit {

    @Input()
    tableData: TableData;

    @Input()
     dataRows : any
     //el componente hacer referencian al modelo Field
     component: ComponentRef<TableData>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        //Representa un contenedor donde se pueden adjuntar una o más vistas a un componente
        private container: ViewContainerRef
    ) {}


    ngOnInit(): void {

         // console.log('config', this.config);
         if (!components) {
            const supportedTypes = Object.keys(components).join(', ');

            throw new Error(
                `Trying to use an unsupported type (${components}).
                Supported types: ${supportedTypes}`
            );
        }


        const component = this.componentFactoryResolver.resolveComponentFactory(
            TableExtendedSimpleComponent
        );

        this.component = this.container.createComponent(component)
        this.component.instance.dataRows = this.dataRows

    }



    ngOnChanges( )  {
        if (this.component) {
            //instancio la
            this.component.instance.dataRows = this.dataRows;
            //this.component.instance.headerRow = this.headerRow;
        }
    }
}
