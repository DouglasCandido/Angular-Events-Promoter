import { AuthenticationPromoterService } from "../controllers/authentication-promoter.service"
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardPromoter implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationPromoterService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const currentUser = this.authenticationService.currentUserValue;

        if (currentUser ) {

            return true;

        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;

    }

}




