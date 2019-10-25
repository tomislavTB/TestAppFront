import { TestBed, async, inject } from '@angular/core/testing';

import { ModalAoeContractGuard } from './modal-aoe-contract.guard';

describe('ModalAoeContractGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalAoeContractGuard]
    });
  });

  it('should ...', inject([ModalAoeContractGuard], (guard: ModalAoeContractGuard) => {
    expect(guard).toBeTruthy();
  }));
});
