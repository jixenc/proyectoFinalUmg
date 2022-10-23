import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {} from '../login/login.component'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'https://desarrollo-web-proyectos.herokuapp.com/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    window.alert("Sus datos han sido registrados correctamente ");
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

   // Sign-up
   public signIn2(user: User): Observable<Object> {
    return this.http.post<Object>(this.endpoint = '/login',user);
  }

  // Sign-in
  signIn(user: User) {
    return this.http
      .post<object>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
         localStorage.setItem('Bearer', res.token);
         this.getUserProfile(res._id).subscribe((res) => {
           this.currentUser = res;
           this.router.navigate(['/principal']);
         })
        ;
      });
  }
  //
  getToken() {
    return localStorage.getItem('Bearer');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('Bearer');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('Bearer');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/login`;
   return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`; 
    
    }
    return throwError(msg);
  }
}