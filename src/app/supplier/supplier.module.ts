import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalAoeSupplierComponent } from './modal-aoe-supplier/modal-aoe-supplier.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalGuardSupplierComponent } from './modal-guard-supplier/modal-guard-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';





@NgModule({
  declarations: [SupplierListComponent, ModalAoeSupplierComponent, SupplierFormComponent, ModalGuardSupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRippleModule

  ],

  providers: [

  ],

  exports: [
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
  ],

  entryComponents: [ModalAoeSupplierComponent]
})
export class SupplierModule { }
