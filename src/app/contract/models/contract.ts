import { ISupplier } from 'src/app/supplier/models/supplier';


export interface IContract {
  contractId: number;
  contractName: string;
  contractCode: string;
  contractNumber: number;
  Currency: string;
  pricePDV: number;
  price: number;
  expirationDate: string;
  supplier: ISupplier;
  deliveryNote: boolean;
  deliveryReceipt: boolean;
  deliveryOrderForm: boolean;


}
