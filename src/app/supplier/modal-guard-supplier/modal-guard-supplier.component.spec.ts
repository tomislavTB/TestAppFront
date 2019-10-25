import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGuardSupplierComponent } from './modal-guard-supplier.component';

describe('ModalGuardSupplierComponent', () => {
  let component: ModalGuardSupplierComponent;
  let fixture: ComponentFixture<ModalGuardSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGuardSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGuardSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
