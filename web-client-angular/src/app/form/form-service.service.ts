import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface RequestOptions {
  headers: HttpHeaders;
}
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor(private http: HttpClient) {}
  private getStandardOptions: () => RequestOptions = () => {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  };

  private handleError(error: HttpErrorResponse) {
    // console.log(error);
    // if (error.status === 0) {
    // console.log('This is client or network', error.error);
    // } else {
    // console.log('Server Side error', error.error);
    // }
    // console.log(error.error);
    return throwError(() => error.error);
  }

  getSectors() {
    return this.http
      .get('/sectors', this.getStandardOptions())
      .pipe(catchError(this.handleError));
  }

  addUser(payload: any) {
    return this.http
      .post('/user', payload, this.getStandardOptions())
      .pipe(catchError(this.handleError));
  }

  getUser(id: string) {
    return this.http
      .get(`/user/${id}`, this.getStandardOptions())
      .pipe(catchError(this.handleError));
  }

  updateUser(id: string, payload: any) {
    return this.http
      .patch(`/user/${id}`, payload, this.getStandardOptions())
      .pipe(catchError(this.handleError));
  }
}
