import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-aoe-supplier',
  templateUrl: './modal-aoe-supplier.component.html',
  styleUrls: ['./modal-aoe-supplier.component.css']
})
export class ModalAoeSupplierComponent implements OnInit {

  @Input() rowData;
  @Input() nesto;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  supplierAoe: FormGroup;


  onFormSubmit() {
    console.log(this.supplierAoe)
    if(this.supplierAoe.valid) {
      console.log('form validna')
      this.toastr.success('Forma je validna');
    } else {
      console.log('forma nije validna')
      this.toastr.error('Forma nije validna');
    }
  }

  ngOnInit() {
    this.supplierAoe = this.fb.group({
      supplierName: ['', Validators.required],
      street: [ '', Validators.required],
      estate: ['', Validators.required],
      city: ['', Validators.required]
  });


    if(this.rowData) {
      this.supplierAoe.patchValue({
        supplierName: this.rowData.supplierName,
        street: this.rowData.street,
        estate: this.rowData.estate,
        city: this.rowData.city


    })

    }


    console.log(this.rowData);
    console.log(this.nesto);

}

}
