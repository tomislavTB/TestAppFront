import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-aoe-supplier',
  templateUrl: './modal-aoe-supplier.component.html',
  styleUrls: ['./modal-aoe-supplier.component.css']
})
export class ModalAoeSupplierComponent implements OnInit {

  @Input() rowData;
  @Input() nesto;
  heroes = this.rowData;
  master = "master";
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgbActiveModal
  ) { }

  supplierAoe: FormGroup;

  onFormSubmit() {
    console.log(this.supplierAoe)
    if (this.supplierAoe.valid) {
      this.modal.close('success');
    } else {
      console.log('forma nije validna')
      this.toastr.error('Forma nije validna');
    }
  }

  ngOnInit() {
    this.supplierAoe = this.fb.group({
      supplierName: ['', Validators.required],
      street: ['', Validators.required],
      estate: ['', Validators.required],
      city: ['', Validators.required]


    });

    if (this.rowData) {
      this.supplierAoe.patchValue({
        supplierName: this.rowData.supplierName,
        street: this.rowData.street,
        estate: this.rowData.estate,
        city: this.rowData.city


      })

    }
  }

}
