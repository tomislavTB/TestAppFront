import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAoeContractComponent } from './modal-aoe-contract.component';

describe('ModalAoeContractComponent', () => {
  let component: ModalAoeContractComponent;
  let fixture: ComponentFixture<ModalAoeContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAoeContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAoeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
