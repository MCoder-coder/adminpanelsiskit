import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTablesImageComponent } from './extended-tables-image.component';

describe('ExtendedTablesImageComponent', () => {
  let component: ExtendedTablesImageComponent;
  let fixture: ComponentFixture<ExtendedTablesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedTablesImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedTablesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
