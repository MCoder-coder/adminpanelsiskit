import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExtendedSimpleListComponent } from './table-extended-simple-list.component';

describe('TableExtendedSimpleListComponent', () => {
  let component: TableExtendedSimpleListComponent;
  let fixture: ComponentFixture<TableExtendedSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExtendedSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExtendedSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
