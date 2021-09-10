import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService {

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
        if (
          !this.localStorageService.getJsonValue('Token')
        ) {

            return true;
        }
        this.router.navigateByUrl('dashboard');
        return false;
      }



}
