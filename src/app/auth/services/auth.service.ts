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
      grant_type: 'client_credentials',
      client_id: '5',
      client_secret: 'oXUATcMvhfJFrChYmfQvLsWCZi0h3orQeN4R341n',
      username: e,
      password: p,
      scope: '*'
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
