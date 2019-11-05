import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';


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

    path: 'login',
    loadChildren : './login/login.module#LoginModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
