import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }
  jwtHelper = new JwtHelperService();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();

    // add a custom header
    if (token !== null) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        const customReq = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getToken())
        });
        return next.handle(customReq);
      } else {
        this.router.navigate(['/login']);
      }

    }
    return next.handle(request);

    // pass on the modified request object
  }
}
