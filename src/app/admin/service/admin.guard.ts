import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  const adminService = inject(AdminAuthService);
  const router = inject(Router);
  
  if(adminService.isAdminLoggedIn() === true){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
