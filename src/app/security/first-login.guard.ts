import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FirstLoginGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user: User = JSON.parse(localStorage.getItem('signed_user'));

    if (!user.is_first_login) {
      this.router.navigate(['top']);
      return false;
    }
    return true;
  }
}
