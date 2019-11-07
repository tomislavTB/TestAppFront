import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderRowOutlet } from '@angular/cdk/table';
import { SUPPLIERDATA } from '../models/mock-data';
import { ISupplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-interaction',
  templateUrl: './supplier-interaction.component.html',
  styleUrls: ['./supplier-interaction.component.css']
})
export class SupplierInteractionComponent implements OnInit {

  heroesData: ISupplier[] = [];
  @Input() singleRow;

  constructor(
    private fb: FormBuilder,
  ) {}
  supplierI: FormGroup;

  ngOnInit() {
    console.log(this.singleRow)
  }

}
