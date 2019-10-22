import { Component, OnInit } from '@angular/core';
import { CONTRACTDATA } from '../models/mock-data'
import { IContract } from '../models/contract';
import { ModalAoeContractComponent } from '../modal-aoe-contract/modal-aoe-contract.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeSupplierComponent } from 'src/app/supplier/modal-aoe-supplier/modal-aoe-supplier.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],

})
export class ContractListComponent implements OnInit {

  contractsData: IContract[] = [];
  contracts: any = []

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.contractsData = CONTRACTDATA;
    console.log(this.contractsData)
  }





  openContractModal(singleRow?) {
    console.log('nesto')
    const modalRef = this.modalService.open(ModalAoeContractComponent);
    if(singleRow) {
      modalRef.componentInstance.rowData = singleRow;
    } else {
      modalRef.componentInstance.rowData = null;
    }
    modalRef.componentInstance.nesto = 'nesto novo';
    modalRef.result.then(result => {
      if (result === 'success') {
        console.log('uspjeh')
      }
    }).catch((res) => {});
  }




  // filters results
   filterDatatable2(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = 11;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.contractsData[0]);
    // assign filtered matches to the active datatable
    // this.suppliersData = this.suppliersData.filter(function(x) {
    //   return x.supplierName 'Like' '%Ivan';
    // })
    this.contractsData = this.contractsData.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < colsAmt; i++) {
            // check for a match
            if (item[keys[i]] != null && item[keys[i]].toString().toLowerCase()    .indexOf(val) !== -1 || !val) {
                // found match, return true to add to result set
                return true;
               } else {
              return this.toastr.error('Nema traženog');
            }
        }
    });
}


  createApplicationYear() {


  }



}
