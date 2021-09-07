import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables
  authUrl = environment.url_login
  apiUrl = environment.url_api;
  options: any;
  tokenRequest: any;
  tokenResponse: any;

  constructor(private http : HttpClient , private router : Router) { }


  login(e: string, p: string)  {


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
        .set('scope' , '*' )
        .set('username', e)
        .set('password', p);



  return this.http.post(this.authUrl, body.toString() , options).subscribe((res : any) => {

        localStorage.setItem('Token', res.access_token);

        if(localStorage.getItem('Token')){
            this.router.navigate(['dashboard']);
        }

        //this.router.navigate(['']);
        //console.log(res.access_token)
  })


//    var myPromise = this.tokenRequest.toPromise().then( (httpResponse) => {
//         console.log("Token Load promise THEN ");
//         console.log("httpResponse: ", httpResponse);
//         this.tokenResponse = httpResponse;
//     });

//     return myPromise;

  }
  /**
   * Revoke the authenticated user token
   */
  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get(this.apiUrl + '/token/revoke', this.options);
  }


}
