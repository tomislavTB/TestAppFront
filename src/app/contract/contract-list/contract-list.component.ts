import { Component, OnInit } from '@angular/core';
import { CONTRACTDATA } from '../models/mock-data'
import { IContract } from '../models/contract';
import { ModalAoeContractComponent } from '../modal-aoe-contract/modal-aoe-contract.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeSupplierComponent } from 'src/app/supplier/modal-aoe-supplier/modal-aoe-supplier.component';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { format } from 'url';
import { DatePipe } from '@angular/common';
import { ModalChartsContractComponent } from '../modal-charts-contract/modal-charts-contract.component';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContractListComponent implements OnInit {

  contractsData: IContract[] = [];
  staticData: IContract[] = [];
  contracts: any = [];
  from_date: any;
  to_date: any;

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private modalService2: NgbModal

  ) { }

  ngOnInit() {
    this.contractsData = CONTRACTDATA;
    this.staticData = CONTRACTDATA;
    console.log(this.contractsData)
  }


  openContractModal(singleRow?) {
    console.log('nesto')
    const modalRef = this.modalService.open(ModalAoeContractComponent
// ,{ size: 'lg', container: 'ngb-modal-window' }
      );
    if (singleRow) {
      modalRef.componentInstance.rowData = singleRow;
    } else {
      modalRef.componentInstance.rowData = null;
    }
    modalRef.componentInstance.nesto = 'nesto novo';
    modalRef.result.then(result => {
      if (result === 'success') {
        console.log('uspjeh')
      }
    }).catch((res) => { });
  }


  openChartsModal(singleRow?) {
    const modalRef2 = this.modalService2.open(ModalChartsContractComponent);
    modalRef2.componentInstance.rowData = singleRow;

    modalRef2.result.then(result => {
      if (result === 'success') {
        console.log('uspjeh')
      }
    }).catch((res) => { });
  }



  // filters results
  filterDatatable2(event) {
    if (event.target.value != null) {
      // get the value of the key pressed and make it lowercase
      let val = event.target.value.toLowerCase();
      // get the amount of columns in the table
      let colsAmt = 11;
      // get the key names of each column in the dataset
      let keys = Object.keys(this.staticData[0]);
      // assign filtered matches to the active datatable
      // this.suppliersData = this.suppliersData.filter(function(x) {
      //   return x.supplierName 'Like' '%Ivan';
      // })
      this.contractsData = CONTRACTDATA.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < colsAmt; i++) {
          // check for a match
          if (item[keys[i]] != null && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            // found match, return true to add to result set
            return true;
          }
        }
      });
    }
  }



  myfilter(event) {

    let to = this.to_date;
    let from = this.from_date;
    // ako je date to I date from ILI samo date to
    if (to && from || to ) {
      this.contractsData = this.contractsData.filter(item => {
        let NewFilter = new Date(moment(item.expirationDate, 'DD.MM.YYYY').format('YYYY-MM-DD')) > new Date(from);
        let NewFilter2 = new Date(moment(item.expirationDate, 'DD.MM.YYYY').format('YYYY-MM-DD')) < new Date(to);
        if(!from) {
          return NewFilter2;
        } else {
          return NewFilter && NewFilter2
        }
      });
      // samo za date from
    }   else if (from) {
        this.contractsData = this.contractsData.filter(item => {
        return new Date(moment(item.expirationDate, 'DD.MM.YYYY').format('YYYY-MM-DD')) < new Date(from);
      });




    // }   else if (from) {
    //     this.contractsData = this.contractsData.filter(item => {
    //     return new Date(moment(item.expirationDate, 'DD.MM.YYYY').format('YYYY-MM-DD')) > new Date(from);
    //   });
    } else {



    }
  }
}
