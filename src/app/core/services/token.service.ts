import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


   //variables
   authUrl = environment.url_login;
   apiUrl = environment.url_api;
   options: any;
   tokenRequest: any;
   tokenResponse: any;

  constructor(private http: HttpClient) { }


  load() {
    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        // Accept: 'application/json;charset=utf-8',
        //'Accept-Charset':'charset=utf-8'  
      }),
    };
    const body = new HttpParams().set('client_id', '5');

    this.tokenRequest = this.http.post(this.authUrl, body.toString(), options);
  
    var myPromise = this.tokenRequest.toPromise().then((httpResponse) => {

      this.tokenResponse = httpResponse;
    });
    return myPromise;

   
  }

  getTokenResponse() {
    return this.tokenResponse;
  }

}
