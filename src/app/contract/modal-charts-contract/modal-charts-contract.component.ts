import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IContract } from '../models/contract';
import { CONTRACTDATA } from '../models/mock-data';
import { NgbModal,  NgbDateNativeAdapter, NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-modal-charts-contract',
  templateUrl: './modal-charts-contract.component.html',
  styleUrls: ['./modal-charts-contract.component.css']
})
export class ModalChartsContractComponent implements OnInit {

  @Input() rowData;
  @Input() nesto;
  constructor(
    private fb: FormBuilder


  ) { }

  contractCharts: FormGroup;
  salesChartPie: EChartOption;

  ngOnInit() {

    this.contractCharts = this.fb.group({
      contractName: ['', Validators.required],
      contractCode: ['', Validators.required],
      contractNumber: ['', Validators.required],
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
      console.log(this.rowData);
      this.contractCharts.patchValue({
        contractName: this.rowData.contractName,
        contractCode: this.rowData.contractCode,
        contractNumber: this.rowData.contractNumber,
        Currency: this.rowData.Currency,
        pricePDV: this.rowData.pricePDV,
        price: this.rowData.price,
        expirationDate: this.rowData.expirationDate,
        supplier: this.rowData.supplier.supplierId,
        deliveryNote: this.rowData.deliveryNote ? 'Da' : 'Ne',
        deliveryReceipt: this.rowData.deliveryOrderForm ? 'Da' : 'Ne',
        deliveryOrderForm: this.rowData.deliveryOrderForm ? 'Da' : 'Ne'
      });
    }
    this.salesChartPie = {
            color: [  '#0000FF',  '#FFA500'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },

            xAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }

            ],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
            ],
            series: [{
                name: 'Postotak realizacije',
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                data: [
                    { value: 100000, name: 'Najveca cijena sa PDV-om' },
                    { value: this.rowData.pricePDV, name: 'Cijena odabranog sa PDV-om' },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
            ]
        };


  //   this.salesChartPie = {
  //     color: ['	#0000FF','#FFA500'],
  //     tooltip: {
  //         show: true,
  //         backgroundColor: 'rgba(0, 0, 0, .8)'
  //     },

  //     xAxis: [{
  //         axisLine: {
  //             show: false
  //         },
  //         splitLine: {
  //             show: false
  //         }
  //     }

  //     ],
  //     yAxis: [{
  //         axisLine: {
  //             show: false
  //         },
  //         splitLine: {
  //             show: false
  //         }
  //     }
  //     ],
  //     series: [{
  //         name: 'Postotak realizacije',
  //         type: 'pie',
  //         radius: '65%',
  //         center: ['50%', '50%'],
  //         data: [
  //             { value: this.rowData.pricePDV + 100000, name: 'Najveca cijena sa PDV-om' },
  //             { value: this.rowData.pricePDV, name: 'Cijena odabranog sa PDV-om' },
  //         ],
  //         itemStyle: {
  //             emphasis: {
  //                 shadowBlur: 10,
  //                 shadowOffsetX: 0,
  //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
  //             }
  //         }
  //     }
  //     ]
  // };
  }
}
