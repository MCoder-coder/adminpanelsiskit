import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    // Variables
    authUrl = environment.url_login;
    apiUrl = environment.url_api;


    constructor(private http: HttpClient) {

    }


    getDrawer() {
        //return this.http.get(`${environment.url_api}localidades?filters[]={"f":"nombre","o":"LIKE","v":"${localidad}%"}`)
        return (
            this.http.get(`${environment.url_api}/v4/app/drawer`)
        )
    }

}
