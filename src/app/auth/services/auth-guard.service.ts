import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {



      /**
       * Constructor
       * @param router The router object
       */
      constructor(
        private router: Router,
        private localStorageService: LocalStorageService
      ) { }
      /**
       * Can activate function
       * @param next The activated route snapshot object
       * @param state The router state snapshot object
       */
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) {
        let token =  this.localStorageService.getJsonValue('Token')
        if (
            token
        ){

            return true;
        }
       // localStorage.removeItem('Token');
        this.localStorageService.clearToken('Token')
        this.router.navigateByUrl('/pages/login');
        return false;
      }

}
