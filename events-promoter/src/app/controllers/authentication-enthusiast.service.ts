import { SocialAuthService } from 'angularx-social-login';
import { Enthusiast } from './../models/enthusiast.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationEnthusiastService {

    private currentUserSubject: BehaviorSubject<Enthusiast>;
    
    public currentUser: Observable<Enthusiast>;

    constructor(private http: HttpClient, private socialAuthService: SocialAuthService) {

        this.currentUserSubject = new BehaviorSubject<Enthusiast>(JSON.parse(localStorage.getItem('currentUser')));
        
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): Enthusiast {

        return this.currentUserSubject.value;

    }

    login(username, password) {

        return this.http.post<any>(`http://localhost:3001/enthusiasts`, { username, password })
            .pipe(map(user => {

                localStorage.setItem('currentUser', JSON.stringify(user));

                this.currentUserSubject.next(user);

                return user;

            }));

    }

    logout() {

        this.socialAuthService.signOut();

        localStorage.removeItem('currentUser');
        
        this.currentUserSubject.next(null);

    }

    loginSocial(temporaryUsername, temporaryPassword, temporaryName) {

        let user = {username: temporaryUsername, password_enthusiast: temporaryPassword, name_enthusiast: temporaryName}

        localStorage.setItem('currentUser', JSON.stringify(user));

        this.currentUserSubject.next(user);

        return user;

    }


}




