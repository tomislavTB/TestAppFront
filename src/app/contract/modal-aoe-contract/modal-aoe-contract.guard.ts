import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ModalAoeContractComponent } from './modal-aoe-contract.component';
import { BsModalService } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalAoeContractGuard implements CanDeactivate<ModalAoeContractComponent>  {



  canDeactivate(component: ModalAoeContractComponent,
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

      if (component.isDirty) {
        const contractName = component.rowData.contractName || 'New Contract';
        return confirm(`Navigate away and lose all changes to ${contractName}?`);
      }
      return true;
    }
  }


