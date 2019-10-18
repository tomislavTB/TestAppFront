import { Component, OnInit } from '@angular/core';
import { ISupplier } from '../models/supplier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeSupplierComponent } from '../modal-aoe-supplier/modal-aoe-supplier.component';
import { SUPPLIERDATA } from '../models/mock-data';
import {  Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliersData: ISupplier[] = [];
  public searchString: string;
  staticRows: ISupplier[] = [];




  constructor(
    private modalService: NgbModal, private  router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.suppliersData = SUPPLIERDATA;
    this.staticRows = SUPPLIERDATA;
    console.log(this.suppliersData)
  }


  openSupplierModal(singleRow?) {
    const modalRef = this.modalService.open(ModalAoeSupplierComponent);
    if(singleRow) {
      modalRef.componentInstance.rowData = singleRow;
    } else {
      modalRef.componentInstance.rowData = null;
    }
    modalRef.result.then(result => {
      if (result === 'success') {
        console.log('uspjeh')
      }
    }).catch((res) => {});
  }



   // filters results
   filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = 4;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.suppliersData[0]);
    // assign filtered matches to the active datatable
    // this.suppliersData = this.suppliersData.filter(function(x) {
    //   return x.supplierName 'Like' '%Ivan';
    // })
    this.suppliersData = this.suppliersData.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < colsAmt; i++) {
            // check for a match
            if (item[keys[i]] != null && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
                // found match, return true to add to result set
                return true;
            } else {
            return this.toastr.error('Nema traženog rezultata');
          }
        }
    });
}



  createApplicationYear() {
  }
}


