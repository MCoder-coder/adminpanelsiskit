import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) {
  
  this.getForm()

}


  getForm() {

    //return this.http.get(`${environment.url_api}localidades?filters[]={"f":"nombre","o":"LIKE","v":"${localidad}%"}`)
        return(
            this.http.get(`${environment.url_api}`)
        )
  }

}
