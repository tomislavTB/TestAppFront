import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'contracts',
    loadChildren : './contract/contract.module#ContractModule'
  },

  {
  path: 'suppliers',
  loadChildren : './supplier/supplier.module#SupplierModule'
  },

  {
    path: 'suppliers/new',
    loadChildren : './supplier/supplier.module#SupplierModule'
    },

    {
      path: 'contracts /new',
      loadChildren : './contract/contract.module#ContractModule'
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
