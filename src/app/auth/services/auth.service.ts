import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // Variables
    authUrl = environment.url_login;
    apiUrl = environment.url_api;
    options: any;
    tokenRequest: any;
    tokenResponse: any;

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

    login(e: string, p: string) {
        //opciones del headers
        const options = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        //opciones del body
        const body = new HttpParams()
            .set('grant_type', 'client_credentials')
            .set('client_id', '5')
            .set('client_secret', 'oXUATcMvhfJFrChYmfQvLsWCZi0h3orQeN4R341n')
            .set('scope', '*')
            .set('username', e)
            .set('password', p);

        return this.http
            .post(this.authUrl, body.toString(), options)
            .subscribe((res: any) => {
               // localStorage.setItem('Token', res.access_token);
                 this.localStorageService.setJsonValue('Token' , res.access_token)
            });
    }
}
