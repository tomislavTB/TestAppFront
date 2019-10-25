import { Component, OnInit } from '@angular/core';
import { ISupplier } from '../models/supplier';
import { SUPPLIERDATA } from '../models/mock-data';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeactivationGuarded } from '../deactivation-guarded';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit, DeactivationGuarded  {


  suppliersData: ISupplier[] = [];
  staticRows: ISupplier[] = [];
  staticData: ISupplier[] = [];
  currentData: ISupplier;
  originalData: ISupplier;
  supplierId: number;
  supplier: ISupplier;



  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  supplierForm: FormGroup;

  isDirty(): boolean {
    return JSON.stringify(this.supplierForm.value) !== JSON.stringify(this.supplier);
  }

  onFormSubmit() {
    console.log(this.supplierForm)
    if(this.supplierForm.valid) {
      console.log('form validna')

    } else {
      console.log('forma nije validna')

    }
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.supplierId = params.id;
    });

    this.supplier = SUPPLIERDATA.find( x =>
      x.supplierId == this.supplierId
    );


    this.supplierForm = this.fb.group({
      supplierId: ['', Validators.required],
      supplierName: ['', Validators.required],
      street: [ '', Validators.required],
      estate: ['', Validators.required],
      city: ['', Validators.required],
    });

    if(this.supplier) {
      this.supplierForm.patchValue({
        supplierName: this.supplier.supplierName,
        street:  this.supplier.street,
        estate:  this.supplier.estate,
        city:  this.supplier.city,
        supplierId: this.supplier.supplierId
      })
      console.log(JSON.stringify(this.supplierForm.value));
      console.log(JSON.stringify(this.supplier));


      console.log( JSON.stringify(this.supplierForm.value) === JSON.stringify(this.supplier));


    }
  }

  test(e) {
    console.log(e);

  }

}
