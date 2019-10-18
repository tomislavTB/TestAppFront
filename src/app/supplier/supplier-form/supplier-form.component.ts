import { Component, OnInit } from '@angular/core';
import { ISupplier } from '../models/supplier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeSupplierComponent } from '../modal-aoe-supplier/modal-aoe-supplier.component';
import { SUPPLIERDATA } from '../models/mock-data';
import {  Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  suppliersData: ISupplier[] = [];
  @Input() rowData;
  @Input() nesto;
  constructor() { }

  ngOnInit() {
    console.log(this.rowData)
    console.log(this.nesto)
  }

}
