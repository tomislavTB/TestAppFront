import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChartsContractComponent } from './modal-charts-contract.component';

describe('ModalChartsContractComponent', () => {
  let component: ModalChartsContractComponent;
  let fixture: ComponentFixture<ModalChartsContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChartsContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChartsContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
