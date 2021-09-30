import { Component, Input, OnInit } from '@angular/core';
import { TableData } from '../../table-data';

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
                    <table class="table" >
                        <thead>
                            <tr>
                                <th class="text-center" appTable [tableData]="tableData.dataRows">{{tableData.dataRows}} </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center"></td>

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


    tableData: TableData;
    @Input()
    headerRow: [] = [];


    dataRows: any;
    constructor() {}

    ngOnInit(): void {}
}
