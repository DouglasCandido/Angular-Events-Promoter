import { Enthusiast } from '../models/enthusiast.model';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// Preciso puxar os dados JSON do backend e converter para objetos e utilizar neste array
let users: Enthusiast[] = [
    
    // Este array deve ser preenchido desta forma, este array é uma coleção de objetos
    {
        id: 1,
        name_enthusiast: "Douglas Mateus Soares Cândido da Silva",
        cpf: "018.308.654-63",
        sex: "M",
        birthDate: "1997-09-23",
        username: "douglascandido",
        password_enthusiast: "douglascandido",
        contactEmail: "douglas.candido1997@gmail.com",
        contactPhone: "84999065876",
        state: "RN",
        city: "Caicó",
        district: "Acampamento",
        street: "João Vitoriano",
        number_place: 157,
        zipCode: "59300-000"
    }

]

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

                case url.endsWith('/enthusiasts') && method === 'POST':
                    return authenticate();
                default:
                    return next.handle(request);

            }    

        }

        function authenticate() {
            
            const { username, password } = body;

            const user = users.find(x => x.username === username && x.password_enthusiast === password);

            if (!user) return error('Username or password is incorrect');

            return ok({
                name_enthusiast: user.name_enthusiast,
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

export const fakeAuthenticationBackendEnthusiastProvider = {

    provide: HTTP_INTERCEPTORS,

    useClass: FakeBackendInterceptor,

    multi: true

};


