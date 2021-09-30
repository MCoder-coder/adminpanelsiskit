import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContenedorComponent } from './table-contenedor.component';

describe('TableContenedorComponent', () => {
  let component: TableContenedorComponent;
  let fixture: ComponentFixture<TableContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
