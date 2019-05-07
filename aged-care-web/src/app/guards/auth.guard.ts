import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthService, private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let activate = false;
    let jwtHelper = new JwtHelperService();
    var token = localStorage.getItem('token');
    if (token) {
      activate = !jwtHelper.isTokenExpired(token);
    }

    if (activate)
      return activate;

    this.router.navigate(['/login'], { queryParams: { src: state.url } });
    return false;
  }
}
