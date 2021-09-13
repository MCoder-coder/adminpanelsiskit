import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouteInfo } from '../models/routeinfo.model';
import { map } from 'rxjs/operators';
import { TokenSessionStorageService } from 'src/app/layouts/services/storage/token-session-storage.service';



//opciones del body
const body = new HttpParams()
    .set('grant_type', 'password')
    .set('client_id', '3')
    .set('client_secret', '1wiHTUApPgQGVrwNkchIPQuIVL8xDhkLVvKEFoUA')
    .set('scope', '*')
   // .set('username', e)
    //.set('password', p);

@Injectable({
    providedIn: 'root',
})
export class RouteService {


     //Variables
    authUrl = environment.url_login;
    apiUrl = environment.url_api;

    constructor(private http: HttpClient , private tokenSessionService: TokenSessionStorageService) {


    }


    getDrawer() : Observable<any> {



        //return this.http.get(`${environment.url_api}localidades?filters[]={"f":"nombre","o":"LIKE","v":"${localidad}%"}`)
        return (
            this.http.get<RouteInfo>(`${environment.url_api}v4/app/drawer`).pipe(
                map(resDrawer =>{
                    //console.log("drawer" , resDrawer)
                    return resDrawer
                })
            )
        )
    }

    //  routes()  : RouteInfo[] {
    //      //Menu Items
    //      const ROUTES: RouteInfo[] = [
    //          {
    //              path: '/dashboard',
    //              title: 'Dashboard',
    //              type: 'link',
    //              icontype: 'dashboard',
    //          },
    //          {
    //              path: '/components',
    //              title: 'Components',
    //              type: 'sub',
    //              icontype: 'apps',
    //              collapse: 'components',
    //              children: [
    //                  { path: 'buttons', title: 'Buttons', ab: 'B' },
    //                  { path: 'grid', title: 'Grid System', ab: 'GS' },
    //                  { path: 'panels', title: 'Panels', ab: 'P' },
    //                  { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
    //                  { path: 'notifications', title: 'Notifications', ab: 'N' },
    //                  { path: 'icons', title: 'Icons', ab: 'I' },
    //                  { path: 'typography', title: 'Typography', ab: 'T' },
    //              ],
    //          },
    //          {
    //              path: '/forms',
    //              title: 'Forms',
    //              type: 'sub',
    //              icontype: 'content_paste',
    //              collapse: 'forms',
    //              children: [
    //                  { path: 'regular', title: 'Regular Forms', ab: 'RF' },
    //                  { path: 'extended', title: 'Extended Forms', ab: 'EF' },
    //                  { path: 'validation', title: 'Validation Forms', ab: 'VF' },
    //                  { path: 'wizard', title: 'Wizard', ab: 'W' },
    //              ],
    //          },
    //          {
    //              path: '/tables',
    //              title: 'Tables',
    //              type: 'sub',
    //              icontype: 'grid_on',
    //              collapse: 'tables',
    //              children: [
    //                  { path: 'regular', title: 'Regular Tables', ab: 'RT' },
    //                  { path: 'extended', title: 'Extended Tables', ab: 'ET' },
    //                  {
    //                      path: 'datatables.net',
    //                      title: 'Datatables.net',
    //                      ab: 'DT',
    //                  },
    //              ],
    //          },
    //          {
    //              path: '/maps',
    //              title: 'Maps',
    //              type: 'sub',
    //              icontype: 'place',
    //              collapse: 'maps',
    //              children: [
    //                  { path: 'google', title: 'Google Maps', ab: 'GM' },
    //                  { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
    //                  { path: 'vector', title: 'Vector Map', ab: 'VM' },
    //              ],
    //          },
    //          {
    //              path: '/widgets',
    //              title: 'Widgets',
    //              type: 'link',
    //              icontype: 'widgets',
    //          },
    //          {
    //              path: '/charts',
    //              title: 'Charts',
    //              type: 'link',
    //              icontype: 'timeline',
    //          },
    //          {
    //              path: '/calendar',
    //              title: 'Calendar',
    //              type: 'link',
    //              icontype: 'date_range',
    //          },
    //          {
    //              path: '/pages',
    //              title: 'Pages',
    //              type: 'sub',
    //              icontype: 'image',
    //              collapse: 'pages',
    //              children: [
    //                  { path: 'pricing', title: 'Pricing', ab: 'P' },
    //                  { path: 'timeline', title: 'Timeline Page', ab: 'TP' },
    //                  { path: 'login', title: 'Login Page', ab: 'LP' },
    //                  { path: 'register', title: 'Register Page', ab: 'RP' },
    //                  { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' },
    //                  { path: 'user', title: 'User Page', ab: 'UP' },
    //              ],
    //          },
    //      ];

    //      return ROUTES
    //  }


}
