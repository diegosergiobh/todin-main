import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials.model';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserToken } from '../models/user-token.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiBaseUrl = 'http://localhost:5000/auth/login';
  private userId!: string;

  constructor(private http: HttpClient) {}

  public login(credentials: LoginCredentials): Observable<UserToken> {
    return this.http.post<UserToken>(this.apiBaseUrl, credentials)
      .pipe(
        map((response: UserToken) => {
          const user = response.user;
          const token = response.token;
          localStorage.setItem('USER_NAME', user.name);
          return { user, token };
        })
      );
  }

  public isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('TOKEN');
    return token ? of(true) : of(false);
  }

  public getUserId(): string{
    return this.userId;
  }
}
