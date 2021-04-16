import { Enthusiast } from './../models/enthusiast.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnthusiastService {

  baseUrl = "http://localhost:3001/enthusiasts";

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

  create(enthusiast: Enthusiast): Observable<Enthusiast> {

    return this.http.post<Enthusiast>(this.baseUrl, enthusiast).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  read(): Observable<Enthusiast[]> {

    return this.http.get<Enthusiast[]>(this.baseUrl).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  readByCPF(cpf: string): Observable<Enthusiast> {

    const url = `${this.baseUrl}/${cpf}`;

    return this.http.get<Enthusiast>(url).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  update(enthusiast: Enthusiast): Observable<Enthusiast> {

    const url = `${this.baseUrl}/${enthusiast.cpf}`;

    return this.http.put<Enthusiast>(url, enthusiast).pipe(
      map(object => object),
      catchError(e => this.errorHandler(e))
    );

  }

  delete(cpf: string): Observable<Enthusiast> {

    const url = `${this.baseUrl}/${cpf}`;

    return this.http.delete<Enthusiast>(url).pipe(
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





