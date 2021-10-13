import { config } from 'rxjs';
import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { AbstractListComponent } from 'src/app/table-list/abstract-list/abstract-list.component';
import { ListComponent } from './list/list.component';

type ComponentClass = { new(...any: any[]): Component };

@Component({
    selector: 'app-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {

    registry = new Map<string, ComponentClass>();

    @ViewChild('FieldViewName', { read: ViewContainerRef, static: true })
    componentStyleContainer: ViewContainerRef;

    @Input() fieldStyle: string;
//    @Input() dataHead: [] = [];
//    @Input() dataColum: [] = [];
    @Input() config : any

    constructor(private factoryResolver: ComponentFactoryResolver) {}

    private componentReference: ComponentRef<{}>;


    private instantiateViewComponent(FieldViewName: string) {

        const componentType = this.provideListComponent(FieldViewName);
        const factoryInstance = this.factoryResolver.resolveComponentFactory(componentType);
        this.componentReference = this.componentStyleContainer.createComponent(factoryInstance);
        const FieldXComponent = this.componentReference.instance as Component;


    }


    private provideListComponent(FieldViewName: string) {

        console.log("provideListComponent()");
        console.log("FieldViewName: ", FieldViewName);

        let componentClass: ComponentClass = this.registry.get(FieldViewName);
        if (componentClass == null) throw new Error(`${name} was not found in the COMPONENTREGISTRY.registry`);

        return componentClass;
    }

    ngOnInit(): void {

       this.instantiateViewComponent(this.fieldStyle);
    }


    ngOnDestroy() {
        console.log("destroy")
        this.destroyChildComponent();
    }

    ngOnChanges() {
        console.log("destroy")
        this.destroyChildComponent();
        this.instantiateViewComponent(this.fieldStyle);
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
