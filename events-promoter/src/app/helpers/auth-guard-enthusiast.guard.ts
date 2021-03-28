import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AuthenticationEnthusiastService } from "../controllers/authentication-enthusiast.service"
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardEnthusiast implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationEnthusiastService, private socialAuthService: SocialAuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const currentUser = this.authenticationService.currentUserValue;

        if (currentUser ) {

            return true;

        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;

    }

}




