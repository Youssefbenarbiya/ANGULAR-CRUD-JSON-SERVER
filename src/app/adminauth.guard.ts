import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class adminauthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('adminlogin')) {
      return true;
    } else {
      this.router.navigate(['/adminlogin-signup']);
      alert("vous devez vous connecter d'abord");
      
      return false;
      
    }
  }
}
