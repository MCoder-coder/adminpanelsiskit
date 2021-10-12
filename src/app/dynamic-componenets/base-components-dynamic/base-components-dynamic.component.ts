import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { AbstractListComponent } from 'src/app/table-list/abstract-list/abstract-list.component';
import { FormComponent } from '../form/form.component';
import { DataList, TableSimpleComponent } from '../table-simple/table-simple.component';




@Component({
    selector: 'app-base-components-dynamic',
    templateUrl: './base-components-dynamic.component.html',
    styleUrls: ['./base-components-dynamic.component.css'],
})
export class BaseComponentsDynamicComponent implements OnInit {

    @ViewChild('componentStyle', { read: ViewContainerRef, static: true })
    componentStyleContainer: ViewContainerRef;

    @Input() ShowcomponentStyle: string;
    @Input() dataHead: [] = [];
    @Input() dataColum: [] = [];
    @Input()
    config : any

    constructor(private factoryResolver: ComponentFactoryResolver) {}

    private contentcomponentStyles = {
        form: FormComponent,
        table: TableSimpleComponent,
    };

    private componentReference: ComponentRef<{}>;


    private instantiateViewComponent(componentName: string) {
        const componentType = this.provideListComponent(componentName);
        const factoryInstance =
            this.factoryResolver.resolveComponentFactory(componentType);
        this.componentReference =
            this.componentStyleContainer.createComponent(factoryInstance);
        const inst = this.componentReference.instance as DataList;
        console.log(inst);
        inst.dataHead = this.dataHead;
        inst.dataColum = this.dataColum;
        inst.config = this.config
    }


    private provideListComponent(componentStyle: string) {
        return this.contentcomponentStyles[componentStyle] || this.contentcomponentStyles.form;
    }

    ngOnInit(): void {

       // this.instantiateViewComponent(this.ShowcomponentStyle);
    }


    ngOnDestroy() {
        console.log("destroy")
        this.destroyChildComponent();
    }

    ngOnChanges() {
        console.log("destroy")
        this.destroyChildComponent();
        this.instantiateViewComponent(this.ShowcomponentStyle);
      //  this.instantiateViewComponent(localStorage.getItem("estilo"));
    }

    private destroyChildComponent() {
        if (this.componentReference) {
            console.log("comopnenet reference" , this.componentReference)
            this.componentReference.destroy();
            this.componentReference = null;
        }
    }
}
