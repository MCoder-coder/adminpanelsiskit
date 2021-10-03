import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { CardItemDirective } from '../../car-item.directive';



@Component({
    selector: 'app-table-extended-simple',
    template: `


        <div class="card">
            <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                    <i class="material-icons">assignment</i>
                </div>
                <h4 class="card-title">Simple Table</h4>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-center"  *ngFor="let itemrow of dataHead">
                                    {{itemrow.title}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let row of dataColum | keyvalue">
                                <ng-template #defaultSelected let-row>
                                       <td class="text-right">{{row.key}}</td>
                                       <td class="text-right">{{row.value.nombre}}</td>
                                        <td class="descripcion">{{row.value.descripcion}}</td>
                                        <td class="fecha">{{row.value.fecha}}</td>
                                        <td class="text-right">
                                            <img src="{{ 'https://www.juanschtrefotografo.com/'+ row.value.imgcaratula}}"
                                                alt>
                                        </td>
                                </ng-template>
                                        <ng-container
                                            [ngTemplateOutlet]="selectedTemplateRef || defaultSelected"
                                            [ngTemplateOutletContext]="{ $implicit: row, index: i }"

                                        >
                                        </ng-container>

                                      <ng-template #defaultOption let-row >
                                            <td class="text-right">{{row}}</td>
                                        </ng-template>

                                        <!-- <ng-container
                                            [ngTemplateOutlet]="optionTemplateRef || defaultOption"
                                            [ngTemplateOutletContext]="{ $implicit: row, index: i }"
                                        >
                                            {{row}}
                                        </ng-container> -->


                            <!-- <td class="text-right">{{row.key}}</td>
                                        <td class="text-right">{{row.value.nombre}}</td>
                                        <td class="descripcion">{{row.value.descripcion}}</td>
                                        <td class="fecha">{{row.value.fecha}}</td>
                                        <td class="text-right">
                                            <img src="{{ 'https://www.juanschtrefotografo.com/'+ row.value.imgcaratula}}"
                                                alt>
                                        </td> -->

                                <td class="text-right"></td>
                                <td class="td-actions text-right">
                                    <button
                                        mat-raised-button
                                        type="button"
                                        class="btn btn-info "
                                    >
                                        <i class="material-icons">person</i>
                                    </button>
                                    <button
                                        mat-raised-button
                                        type="button"
                                        class="btn btn-success "
                                    >
                                        <i class="material-icons">edit</i>
                                    </button>
                                    <button
                                        mat-raised-button
                                        type="button"
                                        class="btn btn-danger "
                                    >
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    `,
    styleUrls: ['./table-extended-simple.component.css'],
})
export class TableExtendedSimpleComponent implements OnInit {


    @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;

    @Input()
    dataHead: [] = [];
    @Input()
    dataColum: any

    @Input("selectedTemplate")
    selectedTemplateRef: TemplateRef<any>;

    @ContentChild("optionTemplate", { static: false }) optionTemplate
    optionTemplateRef: TemplateRef<any>;


    @Output()
    selectionChanged = new EventEmitter<any>();

    selectOption(option: any) {
        this.dataColum = option;
        this.selectionChanged.emit(option);
        console.log(option)
      }

    constructor() {}

    ngOnInit(): void {}
}
