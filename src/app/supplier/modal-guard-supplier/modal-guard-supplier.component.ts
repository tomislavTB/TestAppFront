import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-modal-guard-supplier',
  templateUrl: './modal-guard-supplier.component.html',
  styleUrls: ['./modal-guard-supplier.component.css']
})
export class ModalGuardSupplierComponent {

  subject: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  action(value: boolean) {
    this.bsModalRef.hide();
    this.subject.next(value);
    this.subject.complete();
  }
}
