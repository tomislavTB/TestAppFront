import { TestBed, async, inject } from '@angular/core/testing';

import { SupplierFormGuard } from './supplier-form.guard';

describe('SupplierFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierFormGuard]
    });
  });

  it('should ...', inject([SupplierFormGuard], (guard: SupplierFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
