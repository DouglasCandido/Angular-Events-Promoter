import { Event } from './../models/event.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class EventService {
  
    baseUrl = "http://localhost:8080/api/events";
  
    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
    showMessage(msg: string, isError: boolean = false): void {
  
      this.snackBar.open(msg, 'X', 
      {
        duration:  3000, 
        horizontalPosition: "right", 
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      });
      
    }
  
    create(event: Event): Observable<Event> {
  
      return this.http.post<Event>(this.baseUrl, event).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );
  
    }
  
    findAll(): Observable<Event[]> {
  
      return this.http.get<Event[]>(this.baseUrl).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );
  
    }

    findAllByCNPJ(cnpj_promoter: string): Observable<Event[]> {

      const url = `${this.baseUrl}/bycnpj/${cnpj_promoter}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }

    findAllByName(name_event: string): Observable<Event[]> {

      const url = `http://localhost:8080/api/eventos/byname?name_event=${name_event}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }

    findAllByTheme(theme: string): Observable<Event[]> {

      const url = `http://localhost:8080/api/eventos/bytheme?theme=${theme}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }

    findAllByState(state: string): Observable<Event[]> {

      const url = `http://localhost:8080/api/eventos/bystate?state=${state}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }

    findAllByCity(city: string): Observable<Event[]> {

      const url = `http://localhost:8080/api/eventos/bycity?city=${city}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }

    findAllByZipCode(zipCode: string): Observable<Event[]> {

      const url = `http://localhost:8080/api/eventos/byzipcode?zipCode=${zipCode}`;

      return this.http.get<Event[]>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );

    }
  
    findOne(id: number): Observable<Event> {
  
      const url = `${this.baseUrl}/${id}`;
  
      return this.http.get<Event>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );
  
    }
  
    update(event: Event): Observable<Event> {
  
      const url = `${this.baseUrl}/update/${event.id}`;
  
      return this.http.put<Event>(url, event).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );
  
    }
  
    deleteOne(id: number): Observable<Event> {
  
      const url = `${this.baseUrl}/delete/${id}`;
  
      return this.http.delete<Event>(url).pipe(
        map(object => object),
        catchError(e => this.errorHandler(e))
      );
  
    }
  
    errorHandler(e: any): Observable<any> {
  
      console.log(e);
  
      this.showMessage("Ocorreu um erro no sistema!", true);
  
      return EMPTY;
  
    }
  
}




  

  
  
  
  