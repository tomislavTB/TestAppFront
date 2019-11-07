import { Component, OnInit, Input } from '@angular/core';
import { IContract } from '../models/contract';

@Component({
  selector: 'app-contract-interaction',
  templateUrl: './contract-interaction.component.html',
  styleUrls: ['./contract-interaction.component.css']
})
export class ContractInteractionComponent implements OnInit {

  heroesData: IContract[] = [];
  @Input() singleRow;


  constructor() { }

  ngOnInit() {
  }

}
