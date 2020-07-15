import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signIn(user: AuthModel) {
    return this.httpClient.post(`${environment.apiUrl}/Users/authen`, user);
  }

  getUser() {
    return this.httpClient.get(`${environment.apiUrl}/Users/user-infor`);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
