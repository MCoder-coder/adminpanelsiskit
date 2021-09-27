import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
import { ExtendedTableComponent } from 'src/app/tables/extendedtable/extendedtable.component';
import { RowConfig } from '../../models/row-config';
import { RowInterface } from '../../models/row-interface';
import { ExtendedTablesImageComponent } from '../extended-tables-image/extended-tables-image.component';


const components: { [nombre: string]: Type<any> } = {
    table: ExtendedTablesImageComponent,

};


@Directive({
  selector: '[appDynamicTables]'
})
export class DynamicTablesDirective  implements OnChanges , OnInit{

    @Input()
    rowConfig : RowConfig

    component: ComponentRef<RowInterface>;

     constructor( private resolver: ComponentFactoryResolver,
        //Representa un contenedor donde se pueden adjuntar una o más vistas a un componente
        private container: ViewContainerRef) { }


    ngOnInit(): void {
         // console.log('config', this.config);
        if (!components[this.rowConfig.ID]) {
            const supportedTypes = Object.keys(components).join(', ');

            throw new Error(
                `Trying to use an unsupported type (${this.rowConfig.ID}).
        Supported types: ${supportedTypes}`
            );
        }

        //creo los componentes a traves resolveComponentFactory
        /**
         * Un registro simple que se asigna Components a ComponentFactoryclases
         *  generadas que se pueden usar para crear instancias de componentes.
         * Use para obtener la fábrica para un tipo de componente dado,
         * luego use el create()
         * método de la fábrica para crear un componente de ese tipo.
         */
        const component = this.resolver.resolveComponentFactory<RowInterface>(
            components[this.rowConfig.ID]
        );
       //console.log('template componenet', component);
        this.component = this.container.createComponent(component);
        // console.log('this.component.instance.config' , this.component.instance.config)
        this.component.instance.rowconfig = this.rowConfig;

    }


    ngOnChanges() {
        if (this.component) {
            //instancio la
            this.component.instance.rowconfig = this.rowConfig;

        }
    }

}
