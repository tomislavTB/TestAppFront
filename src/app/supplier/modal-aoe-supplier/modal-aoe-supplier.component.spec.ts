import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeSupplierComponent } from './modal-aoe-supplier.component';

describe('ModalAoeSupplierComponent', () => {
  let component: ModalAoeSupplierComponent;
  let fixture: ComponentFixture<ModalAoeSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAoeSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
