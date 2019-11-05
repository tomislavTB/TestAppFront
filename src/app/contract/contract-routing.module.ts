import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { AuthGuard } from '../helpers/auth.guard';


const routes: Routes = [
  {
    path: 'contracts',
    component: ContractListComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'contracts/:id',
    component: ContractFormComponent,
    canActivate: [AuthGuard]
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
