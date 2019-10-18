import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractModule } from './contract/contract.module';
import { SupplierModule } from './supplier/supplier.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule, MatCardModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContractModule,
    SupplierModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule,
    RouterModule.forRoot([]),
    NgSelectModule, FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  exports: [MatInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
