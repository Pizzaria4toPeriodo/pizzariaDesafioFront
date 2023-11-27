import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roteGuardGuard } from './rote-guard.guard';

describe('roteGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roteGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
