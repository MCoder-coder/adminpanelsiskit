import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../../../core/services/storage/local-storage.service';
import { TokenSessionStorageService } from '../storage/token-session-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService {
    /**
     * Constructor
     * @param router The router object
     */
    constructor(
        private router: Router,
        private localStorageService: LocalStorageService,
        private tokenSessionService: TokenSessionStorageService,
        private authService : AuthService
    ) {}
    /**
     * Can activate function
     * @param next The activated route snapshot object
     * @param state The router state snapshot object
     */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        if (this.tokenSessionService.getToken()) {
            return true;
        }
        {
            // localStorage.removeItem('Token');
            console.log("se removio el")
            this.tokenSessionService.removeToken();
            this.router.navigateByUrl('/pages/login');
            return false;
        }
    }


}
