import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractModule } from './contract/contract.module';
import { SupplierModule } from './supplier/supplier.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule, MatCardModule, MatDatepicker, MatDatepickerModule } from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';


@NgModule({
  declarations: [
    AppComponent
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
    MatCardModule,
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: NgbDateNativeAdapter, useClass: NgbDateNativeAdapter},

    // provider used to create fake backend
    fakeBackendProvider
],
  exports: [MatInputModule,
            FormsModule,
            ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
