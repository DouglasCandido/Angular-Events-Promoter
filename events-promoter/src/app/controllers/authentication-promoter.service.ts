import { Promoter } from './../models/promoter.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationPromoterService {

    private currentUserSubject: BehaviorSubject<Promoter>;
    
    public currentUser: Observable<Promoter>;

    constructor(private http: HttpClient) {

        this.currentUserSubject = new BehaviorSubject<Promoter>(JSON.parse(localStorage.getItem('currentUserPromoter')));
        
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): Promoter {

        return this.currentUserSubject.value;

    }

    login(username, password) {

        return this.http.post<any>(`http://localhost:8080/api/promoters/authenticate`, { username, password })
            .pipe(map(user => {

                localStorage.setItem('currentUserPromoter', JSON.stringify(user));

                this.currentUserSubject.next(user);

                return user;

            }));

    }

    logout() {

        localStorage.removeItem('currentUserPromoter');
        
        this.currentUserSubject.next(null);

    }

}





