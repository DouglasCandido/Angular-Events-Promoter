import { Subscription } from './../models/subscription.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  baseUrl = "http://localhost:8080/api/subscriptions";

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

  subscribe(subscription: Subscription): Observable<Subscription> {

    return this.http.post<Subscription>(this.baseUrl, subscription).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  findAll(): Observable<Subscription[]> {

    return this.http.get<Subscription[]>(this.baseUrl).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  findAllByCPF(cpf_enthusiast: string): Observable<Subscription[]> {

    const url = `${this.baseUrl}/bycpf/${cpf_enthusiast}`;

    return this.http.get<Subscription[]>(url).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  findOne(id: number): Observable<Subscription> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Subscription>(url).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  deleteOne(id: number): Observable<Subscription> {

    const url = `${this.baseUrl}/delete/${id}`;

    return this.http.delete<Subscription>(url).pipe(
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

