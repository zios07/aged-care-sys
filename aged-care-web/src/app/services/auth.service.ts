import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.API_URL;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(credentials) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.url + '/api/v1/authentication/authenticate', credentials, { headers, responseType: 'text' as 'json' });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const isExpired = this.jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getConnectedUsername() {
    return localStorage.getItem('username');
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    const decodedToken: any = this.jwtHelper.decodeToken(token);
    if (decodedToken.role && decodedToken.role.indexOf('ADMIN') > -1) {
      return true;
    }
    return false;
  }


  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }
}
