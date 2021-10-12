import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponentsDynamicComponent } from './base-components-dynamic.component';

describe('BaseComponentsDynamicComponent', () => {
  let component: BaseComponentsDynamicComponent;
  let fixture: ComponentFixture<BaseComponentsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseComponentsDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseComponentsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
