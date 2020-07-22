 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../../interfaces/user';
import { DataUserI} from '../../interfaces/data-user';
import { TokenI } from '../../interfaces/token';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // global variables
  //end point
  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  token: string;

  constructor(private httpClient: HttpClient, private router: Router) { }
  register(user: DataUserI): Observable<TokenI> {
    return this.httpClient.post<TokenI>(`${this.AUTH_SERVER}/client/signUp`,
      user).pipe(tap(
        (res: TokenI) => {
          if (res) {
            // save token
            this.saveToken(res.token);
          }
        })
      );
  }

  login(user: UserI): Observable<TokenI> {
    return this.httpClient.post<TokenI>(`${this.AUTH_SERVER}/client/login`,
      user).pipe(tap(
        (res: TokenI) => {
          if (res) {
            // save token in local storage
            this.saveToken(res.token);
          }
        })
      );
  }

  loggedInClient()  {
    if (localStorage.getItem('token')) {
 
     return this.httpClient.get<any>(`${this.AUTH_SERVER}/GetModule`);    
    }    
  }

  
  ClientInfo() {
    if (localStorage.getItem('token')) {
     return this.httpClient.get<any>(`${this.AUTH_SERVER}/api/client/profile`);    
    }    
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  private saveToken(token: string): void {
   
    localStorage.setItem("token", token);
     
     this.token = token;
 
  }

   getToken(): string {
    return localStorage.getItem('token');
  }
}
