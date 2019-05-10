import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  private jwtHelper = new JwtHelperService();

  invalidLogin: boolean;
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  onLogin(credentials) {

    this.authService.authenticate(credentials).subscribe((result: string) => {
      let token = result;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', credentials.username);
        let srcUrl = this.route.snapshot.queryParamMap.get("src");
        let url = '/';
        let role = this.jwtHelper.decodeToken(token).role;
        switch (role) {
          case 'PATIENT' : url = '/health-records'; break;
          case 'NURSE' : url = '/appointments'; break;
          case 'DOCTOR' : url = '/doctor-inbox'; break;
        }
        
        this.router.navigate([srcUrl || url]);
      }

    }, error => {
      if (error.status == 400 || error.status == 401 || error.status == 403)
        this.invalidLogin = true;
    })

  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (!token)
      return false;
    let isExpired = this.jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

}
