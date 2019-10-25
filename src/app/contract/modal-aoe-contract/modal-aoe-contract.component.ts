import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IContract } from '../models/contract';
import { CONTRACTDATA } from '../models/mock-data';
import { ISupplier } from 'src/app/supplier/models/supplier';
import { SUPPLIERDATA } from 'src/app/supplier/models/mock-data';
import { NgbModal,  NgbDateNativeAdapter, NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ModalAoeContractGuard } from './modal-aoe-contract.guard';

@Component({
  selector: 'app-modal-aoe-contract',
  templateUrl: './modal-aoe-contract.component.html',
  styleUrls: ['./modal-aoe-contract.component.css']
})
export class ModalAoeContractComponent implements OnInit {


  suppliersData: ISupplier[] = [];

  @Input() rowData;
  @Input() nesto;
  isAmountCalculated = false;
  isAmountCalculated2 = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ngbModal: NgbModal,
    private ngbDateNativeAdapter: NgbDateNativeAdapter,
    private parserFormatter: NgbDateParserFormatter,


  ) { }

  contractAoe: FormGroup;
  public suppliers: any = [];
  selectedSuppliers: any;
  currentTime: any;
  minDateFrom: any;
  minDateTo: any;
  private currentData: IContract;
  private originalData: IContract;



  get data(): IContract {
    return this.currentData;
  }

  set data(value: IContract) {
    this.currentData = value;
    this.originalData = { ...value};
  }


  get isDirty(): boolean {
    return JSON.stringify(this.originalData) !== JSON.stringify(this.currentData);
  }


  ngOnInit() {

    this.suppliersData = SUPPLIERDATA;
    this.contractAoe = this.fb.group({
      contractName: ['', Validators.required],
      contractCode: ['', Validators.required],
      contractNumber:['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      Currency: ['', Validators.required],
      pricePDV: ['', Validators.required],
      price: ['', Validators.required],
      expirationDate: ['', Validators.required],
      supplier: ['', Validators.required],
      deliveryNote: ['', Validators.required],
      deliveryReceipt: ['', Validators.required],
      deliveryOrderForm: ['', Validators.required]
    });

    if (this.rowData) {
      console.log(this.rowData)
      console.log();
      this.contractAoe.patchValue({
        contractName: this.rowData.contractName,
        contractCode: this.rowData.contractCode,
        contractNumber: this.rowData.contractNumber,
        Currency: this.rowData.Currency,
        pricePDV: this.rowData.pricePDV,
        price: this.rowData.price,
        expirationDate: new Date(moment(this.rowData.expirationDate,'dd.mm.yyyy').year(),moment(this.rowData.expirationDate,'dd.mm.yyyy').month(), moment(this.rowData.expirationDate,'dd.mm.yyyy').day()),
        supplier: this.rowData.supplier.supplierId,
        deliveryNote: this.rowData.deliveryNote ? 'Da' : 'Ne',
        deliveryReceipt: this.rowData.deliveryOrderForm ? 'Da' : 'Ne',
        deliveryOrderForm: this.rowData.deliveryOrderForm ? 'Da' : 'Ne'
      });

      console.log(new Date())

      console.log(SUPPLIERDATA)
    }
    console.log(this.rowData)
    console.log(this.nesto)
  }
  OnIzracunaj(pricePDV) {
    this.isAmountCalculated = true;
    this.rowData.pricePDV = pricePDV * 7.5;
  }

  onFormSubmit() {
    console.log(this.contractAoe)
    if (this.contractAoe.valid) {
      this.toastr.success('Forma je validna');
    } else {
      this.toastr.error('Forma nije validna');
    }
  }

  OnIzracunaj2(price) {
    this.isAmountCalculated2 = true;
    this.rowData.price = price * 7.5;
  }


  // function() {
  //   ('input[name="daterange"]').daterangepicker({
  //     timePicker: true,
  //     startDate: moment().startOf('hour'),
  //     endDate: moment().startOf('hour').add(32, 'hour'),
  //     locale: {
  //       format: 'M/DD hh:mm A'
  //     }
  //   });
  // });
}
