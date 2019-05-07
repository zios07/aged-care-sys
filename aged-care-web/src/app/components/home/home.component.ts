import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username;

  constructor(public authService: AuthService, private roleService: RoleService) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
  }

  onLogout(form) {
    this.authService.logout();
  }
}
