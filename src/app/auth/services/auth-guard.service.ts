import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {



      /**
       * Constructor
       * @param router The router object
       */
      constructor(
        private router: Router
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
        let token =  localStorage.getItem('Token')
        if (
            token
        ){

            return true;
        }
        localStorage.removeItem('Token');
        this.router.navigateByUrl('/pages/login');
        return false;
      }

}
