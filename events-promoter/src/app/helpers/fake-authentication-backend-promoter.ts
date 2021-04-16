import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import axios from 'axios';

let users

const fetchData = async () => {
    const result = await axios.get(
        "http://localhost:8080/api/promoters",
    );

    return result;
};

fetchData().then(res => {
    users = res.data
})

users = JSON.stringify(users, null, 2)

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {

            switch (true) {

                case url.endsWith('/promoters/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    return next.handle(request);

            }    

        }

        function authenticate() {

            const { username, password } = body;

            const user = users.find(x => x.username === username && x.password_promoter === password);

            if (!user) return error('Username or password is incorrect');

            return ok({
                id: user.id,
                name_promoter: user.name_promoter,
                token: 'fake-jwt-token'
            })

        }

        function ok(body?) {

            return of(new HttpResponse({ status: 200, body }))

        }

        function error(message) {

            return throwError({ error: { message } });
            
        }

        function unauthorized() {

            return throwError({ status: 401, error: { message: 'Unauthorised' } });

        }

        function isLoggedIn() {

            return headers.get('Authorization') === 'Bearer fake-jwt-token';

        }

        function idFromUrl() {

            const urlParts = url.split('/');

            return parseInt(urlParts[urlParts.length - 1]);

        }

    }

}

export const fakeAuthenticationBackendPromoterProvider = {

    provide: HTTP_INTERCEPTORS,

    useClass: FakeBackendInterceptor,

    multi: true

};





