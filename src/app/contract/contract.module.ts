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
import { MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ContractListComponent, ModalAoeContractComponent, ContractFormComponent],
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
    MatIconModule

  ],
  entryComponents: [ModalAoeContractComponent]
})
export class ContractModule { }
