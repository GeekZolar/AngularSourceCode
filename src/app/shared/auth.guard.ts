import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot 
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isLoggedIn = this.authService.isUserLoggedIn();
      console.log('canActivate', isLoggedIn);
      console.log(route, state);
    return isLoggedIn;
  }
}
