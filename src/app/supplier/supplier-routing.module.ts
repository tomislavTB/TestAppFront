import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierFormGuard } from './supplier-form/supplier-form.guard';


const routes: Routes = [
  {
    path: 'suppliers',
    component: SupplierListComponent
  },
  {
    path: 'suppliers/:id',
    component: SupplierFormComponent,
    canDeactivate: [SupplierFormGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
