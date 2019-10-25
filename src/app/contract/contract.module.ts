import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalAoeContractComponent } from './modal-aoe-contract/modal-aoe-contract.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCardModule, MatDividerModule, MatIconModule, MatDatepicker, MatDatepickerModule } from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { ModalChartsContractComponent } from './modal-charts-contract/modal-charts-contract.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    ContractListComponent,
    ModalAoeContractComponent,
    ContractFormComponent,
    ModalChartsContractComponent,
    ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMomentDateModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    MatFormFieldModule,
    NgxEchartsModule,

  ],
  entryComponents: [ModalAoeContractComponent, ModalChartsContractComponent]
})
export class ContractModule { }
