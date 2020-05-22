import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuardService implements CanActivate {
  private NOT_ALLOWED_BOUND: number = 0.5;

  private isAllowed(): boolean {
    const someValue: number = Math.random()
    console.log(someValue < this.NOT_ALLOWED_BOUND ? 'Allowed' : 'Not allowed')
    return someValue < this.NOT_ALLOWED_BOUND;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAllowed();
  }
}
