import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../../core/services/storage/local-storage.service';
import { TokenSessionStorageService } from './storage/token-session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {




    constructor(private authService : AuthService , private tokenSessionStorageService : TokenSessionStorageService , private router: Router , private localStorageService : LocalStorageService ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const emailLocalStorage = this.localStorageService.getJsonValue('email')
        const passwordLocalStorage = this.localStorageService.getJsonValue('password')

        //constantes de tokenSessionStorageService , servicico especifico de tokens
        const access_token = this.tokenSessionStorageService.getToken();
        const refreshToken = this.tokenSessionStorageService.getRefreshToken();
        const expire_in = this.tokenSessionStorageService.getExpireIn();
        const token_type = this.tokenSessionStorageService.getTokenType();

        if (access_token) {
          request = request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
          });
        }

        // if (access_token) {
        //     request = request.clone({
        //       body: {
        //             access_token : access_token,
        //             expire_in : refreshToken,
        //             refresh_token : expire_in,
        //          //   token_type : token_type,
        //       }
        //     });
        //   }



        request = request.clone({
          headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request  ).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              console.log('event--->>> interceptor', event.body);



              if (event.body.access_token != this.tokenSessionStorageService.getToken()) {
                // this.router.navigate(['pages/login']).then(_ => console.log('redirect to login'));

            //     this.authService.login(emailLocalStorage , passwordLocalStorage)
            //     .subscribe((res : any) => {
            //         console.log( 'interceptor', res)
            //         this.tokenSessionStorageService.saveToken(res.access_token)
            //         this.tokenSessionStorageService.saveRefreshToken(res.refresh_token)
            //   //      this.tokenSessionStorageService.saveToken(res.token_type)
            //         this.tokenSessionStorageService.saveExpireIn(res.expires_in)
            //          //this.router.navigate(['pages/login']).then(_ => console.log('redirect to login if'));
            //      });
            //      shareReplay()

                console.log('token distintos')
              }


            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            if (error.status === 500) {

             if (error.ok === false) {
                    location.reload()
             } else {
                this.router.navigate(['pages/login']).then(_ => console.log('redirect to login else'));
             }
            }
            return throwError(error);
          }));
    }
}
