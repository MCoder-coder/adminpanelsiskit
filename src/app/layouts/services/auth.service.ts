import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

import { catchError, map, retry, shareReplay, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../core/services/storage/local-storage.service';
import { TokenSessionStorageService } from './storage/token-session-storage.service';





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


    private currentOldTokenSubject: BehaviorSubject<any>;
    public currentToken: Observable<any>;

    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService,
        private tokenSessionService: TokenSessionStorageService
    ) {


    }

    //se modifico la funcion para que sea de tipo obserbavle
    login(e: string, p: string) : Observable<any>{



        const options = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };


        //opciones del body
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('client_id', '3')
            .set('client_secret', '1wiHTUApPgQGVrwNkchIPQuIVL8xDhkLVvKEFoUA')
            .set('scope', '*')
            .set('username', e)
            .set('password', p);


            return this.http.post(this.authUrl , body.toString() , options).pipe(
                map((res : any)=> {
                    if (res) {


                        this.tokenSessionService.saveToken(res.access_token)
                        this.tokenSessionService.saveRefreshToken(res.refresh_token)
                        this.tokenSessionService.saveTokenType(res.token_type)
                        this.tokenSessionService.saveExpireIn(res.expires_in)
                        //this.currentOldTokenSubject.next(res.access_token)

                        return res
                    } else {
                        console.log('else')
                        //return null
                    }
                }),
                shareReplay(),//evita que el receptor de este Observable active accidentalmente múltiples solicitudes POST debido a múltiples suscripciones
                catchError(this.handleError)
            )

    }

    logout(): void {
        this.tokenSessionService.removeToken();
        this.tokenSessionService.removeRefreshToken();
    }






    public handleError(error: HttpErrorResponse) {
        if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
            } else {
                switch (error.error) {
                     case 500:
                      break
                    case 404:
                        break;
                    case 403:
                        break;
                }
            }
        } else {
            //console.error('some thing else happened');
        }

        return throwError('Algo salio mal');
    }
}
