import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountInformation, AuthModel } from '../models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signIn(user: AuthModel) {
    return this.httpClient.post(`${environment.apiUrl}/Users/authen`, user);
  }

  getUser(): Observable<AccountInformation> {
    return this.httpClient.get<AccountInformation>(`${environment.apiUrl}/Classes/get-user-result`);
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
