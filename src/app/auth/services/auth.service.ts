import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  authUrl = environment.url_login
  apiUrl = environment.url_api;
  options: any;

  constructor(private http : HttpClient) { }


  login(e: string, p: string) {
    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'srKHlpLcnyLaBhZmQsAIuztgY7C0N8gjZPFKjYgu',
      username: e,
      password: p,
      scope: ''
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */
  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get(this.apiUrl + '/token/revoke', this.options);
  }

  
}
