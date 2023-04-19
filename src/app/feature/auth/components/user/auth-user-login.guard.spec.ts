import { TestBed } from '@angular/core/testing';

import { AuthUserLoginGuard } from './auth-user-login.guard';

describe('AuthUserLoginGuard', () => {
  let guard: AuthUserLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUserLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
