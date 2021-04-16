import { Promoter } from './../models/promoter.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoterService {

  baseUrl = "http://localhost:8080/api/promoters";

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

  create(promoter: Promoter): Observable<Promoter> {

    return this.http.post<Promoter>(this.baseUrl, promoter).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  read(): Observable<Promoter[]> {

    return this.http.get<Promoter[]>(this.baseUrl).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  readById(id: number): Observable<Promoter> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Promoter>(url).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  update(promoter: Promoter): Observable<Promoter> {

    const url = `${this.baseUrl}/${promoter.id}`;

    return this.http.put<Promoter>(url, promoter).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  delete(id: number): Observable<Promoter> {

    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Promoter>(url).pipe(
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



