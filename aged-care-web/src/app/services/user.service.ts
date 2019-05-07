import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  registerUser(user, isAdmin) {
    const path = isAdmin ? '/api/v1/users/register-admin' : '/api/v1/users/register';
    return this.httpClient.post(this.url + path , user);
  }

  loadUsers(page, size) {
    return this.httpClient.get(this.url + '/api/v1/users?page=' + page + '&size=' + size);
  }

  deleteUser(id) {
    return this.httpClient.delete(this.url + '/api/v1/users/' + id);
  }

  findById(id) {
    return this.httpClient.get(this.url + '/api/v1/users/' + id);
  }
}
