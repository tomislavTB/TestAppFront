import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInteractionComponent } from './supplier-interaction.component';

describe('SupplierInteractionComponent', () => {
  let component: SupplierInteractionComponent;
  let fixture: ComponentFixture<SupplierInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
