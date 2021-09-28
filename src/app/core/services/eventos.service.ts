import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EventosService {
    //Variables
    authUrl = environment.url_login;
    apiUrl = environment.url_api;
    constructor(private http: HttpClient) {}

    getEventos() {
        return (
            this.http.get(`${environment.url_api}v4/eventos/`).pipe(
                map((resEventos : any )=> {
                  //  console.log("resEventos" , resEventos.data.eventos)
                    return resEventos.data.eventos
                })
            )
        )
    }
}
