import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-tables-image',
  template: ` <div class="col-md-12">
  <div class="card">
    <div class="card-header card-header-rose card-header-icon">
      <div class="card-icon">
        <i class="material-icons">assignment</i>
      </div>
      <h4 class="card-title">Shopping Cart Table</h4>
    </div>
      <div class="card-body">
          <div class="table-responsive">
              <table class="table table-shopping">
                      <thead>
                          <tr>
                            <th class="text-center"></th>
                            <th></th>
                            <th class="th-description"></th>
                            <th class="th-description"></th>
                            <th class="text-right"></th>
                            <th class="text-right"></th>
                            <th class="text-right"></th>
                            <th></th>
                          </tr>
                      </thead>
                    <tbody>
                        <tr >
                            <td>
                                <div class="img-container">
                                    <img src="" alt="...">
                                </div>
                            </td>
                            <td class="td-name">

                                <br />
                                <small></small>
                            </td>
                            <td></td>
                            <td>

                            </td>
                            <td class="td-number text-right"><small>&euro;</small></td>
                            <td class="td-number">

                                <div class="btn-group btn-group-sm">
                                    <button mat-raised-button class="btn btn-round btn-info btn-xs"> <i class="material-icons">remove</i> </button>
                                    <button mat-raised-button class="btn btn-round btn-info btn-xs"> <i class="material-icons">add</i> </button>
                                </div>
                            </td>
                            <td class="td-number">
                                <small>&euro;</small>
                            </td>
                            <td class="td-actions">
                                <button mat-button type="button"  matTooltip="Remove item" [matTooltipPosition]="'left'" class="btn btn-link">
                                    <i class="material-icons">close</i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5"></td>
                            <td class="td-total">
                                Total
                            </td>
                            <td colspan="1" class="td-price">
                                <small>&euro;</small>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="6"></td>
                            <td colspan="2" class="text-right">
                                <button mat-raised-button type="button" class="btn btn-info btn-round">Complete Purchase <i class="material-icons">keyboard_arrow_right</i></button>
                            </td>
                        </tr>
                    </tbody>
              </table>
          </div>
      </div>
  </div>
</div>`,
  styleUrls: ['./extended-tables-image.component.css']
})
export class ExtendedTablesImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
