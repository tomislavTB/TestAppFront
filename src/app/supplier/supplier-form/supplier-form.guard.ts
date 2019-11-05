import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SupplierFormComponent } from './supplier-form.component';

@Injectable({
  providedIn: 'root'
})
export class SupplierFormGuard implements CanDeactivate<SupplierFormComponent>   {

  canDeactivate(component: SupplierFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {



  //     if (component.isDirty) {
  //       const subject = new Subject<boolean>();
  //       const modal = this.modalService.show(ModalGuardContractComponent, {'class': 'modal-dialog-primary'});
  //          modal.content.subject = subject;
  //     }
  //     return true;
  //   }
  // }

      if (component.isDirty()) {
        // const supplierName = component.rowData.supplierName || 'New Contract';
        return confirm(`Napustanjem forme izgubit cete sve podatke!`);
      }
    }
  }
