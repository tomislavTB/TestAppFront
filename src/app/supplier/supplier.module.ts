import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalAoeSupplierComponent } from './modal-aoe-supplier/modal-aoe-supplier.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './pipes/filter.pipe';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';






@NgModule({
  declarations: [SupplierListComponent, ModalAoeSupplierComponent, FilterPipe, SupplierFormComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NgxDatatableModule,
    BrowserModule,
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

    FilterPipe,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
  ],

  entryComponents: [ModalAoeSupplierComponent]
})
export class SupplierModule { }
