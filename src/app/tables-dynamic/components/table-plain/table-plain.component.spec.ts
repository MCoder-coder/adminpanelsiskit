import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlainComponent } from './table-plain.component';

describe('TablePlainComponent', () => {
  let component: TablePlainComponent;
  let fixture: ComponentFixture<TablePlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
