import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url:string = environment.API_URL;

  constructor(private http: HttpClient) { }

  loadRoles() {
    return this.http.get(this.url + "/api/v1/roles");
  }

  getRoleByUsername(username) {
    return this.http.get(this.url + "/api/v1/roles?username=" + username);
  }
}
