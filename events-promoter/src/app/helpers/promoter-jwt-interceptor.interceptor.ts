import { AuthenticationPromoterService } from './../controllers/authentication-promoter.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PromoterJWtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationPromoterService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUser = this.authenticationService.currentUserValue;

        if (currentUser && currentUser.token) {

            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });

        }

        return next.handle(request);

    }

}

