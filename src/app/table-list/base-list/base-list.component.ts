import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableExtendedSimpleListComponent } from '../table-extended-simple-list/table-extended-simple-list.component';
import { AbstractList } from '../table-list.component';

@Component({
    selector: 'app-base-list',
    templateUrl: './base-list.component.html',
    styleUrls: ['./base-list.component.css'],
})
export class BaseListComponent implements OnInit, OnDestroy, OnChanges {


    @ViewChild('albumListStyle', { read: ViewContainerRef, static: true })
    albumListContainer: ViewContainerRef;

    @Input() showContentStyle: string;
    @Input() albumList: [] = [];

    constructor(private factoryResolver: ComponentFactoryResolver) {}

    ngOnInit(): void {
        //  this.showContentStyle = '';
        // this.instantiateViewComponent(this.showContentStyle);
    }

    private contentStyles = {
        list: FormComponent,
        covers: TableExtendedSimpleListComponent,
    };
    private componentReference: ComponentRef<{}>;


    private instantiateViewComponent(componentName: string) {
        const componentType = this.provideListComponent(componentName);
        const factoryInstance =
            this.factoryResolver.resolveComponentFactory(componentType);
        this.componentReference =
            this.albumListContainer.createComponent(factoryInstance);
        const inst = this.componentReference.instance as AbstractList;
        console.log(inst);
        inst.albumListToRender = this.albumList;
    }

    private provideListComponent(componentStyle: string) {
        return this.contentStyles[componentStyle] || this.contentStyles.list;
    }

    ngOnDestroy() {
        console.log("destroy")
        this.destroyChildComponent();
    }

    ngOnChanges() {
        console.log("destroy")
        this.destroyChildComponent();
        this.instantiateViewComponent(this.showContentStyle);
    }

    private destroyChildComponent() {
        if (this.componentReference) {
            this.componentReference.destroy();
            this.componentReference = null;
        }
    }
}
