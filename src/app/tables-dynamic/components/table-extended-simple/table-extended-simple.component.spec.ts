import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExtendedSimpleComponent } from './table-extended-simple.component';

describe('TableExtendedSimpleComponent', () => {
  let component: TableExtendedSimpleComponent;
  let fixture: ComponentFixture<TableExtendedSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableExtendedSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExtendedSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
