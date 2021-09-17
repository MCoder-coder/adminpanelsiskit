import { FieldConfig } from 'src/app/dynamic-form/models/field-config.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteInfo } from 'src/app/sidebar/models/routeinfo.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EventosOptionsFieldService {


    //Variables
    authUrl = environment.url_login;
    apiUrl = environment.url_api;

    constructor(private http: HttpClient) { }



    getFieldOption(): Observable<any> {
        //return this.http.get(`${environment.url_api}localidades?filters[]={"f":"nombre","o":"LIKE","v":"${localidad}%"}`)
        return (
            this.http.get<FieldConfig>(`${environment.url_api}v4/eventos/options`).pipe(
                map((resFieldOption : any )=> {
                    console.log("optionField" , resFieldOption.data[0].fields)
                    return resFieldOption.data[0].fields
                })
            )
        )
    }

}
