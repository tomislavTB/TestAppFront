import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';


const routes: Routes = [
  {path: 'suppliers',
    component: SupplierListComponent
},
{path: 'supplier:/id',
component: SupplierFormComponent
},
{path: 'suppliers/new',
component: SupplierFormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
