import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ModalAoeContractGuard } from './modal-aoe-contract/modal-aoe-contract.guard';


const routes: Routes = [
  {
    path: 'contracts',
    component: ContractListComponent

  },
  {
    path: 'contracts/:id',
    component: ContractFormComponent
  },
{
  path: 'contracts/new',
  component: ContractFormComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
