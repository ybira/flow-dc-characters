import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../model/auth-response.model';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, password: string): Observable<User> {
    return this.http
      .post<AuthResponse>(environment.baseUrl + 'auth/login', { email, password })
      .pipe(
        switchMap((resp) => {
          localStorage.setItem('accessToken', resp.accessToken);
          localStorage.setItem('refreshToken', resp.refreshToken);
          return this.http.get<User>(environment.baseUrl + 'auth/user').pipe(
            tap((user) => {
              this.loggedInUser$.next(user);
              return user;
            })
          );
        })
      );
  }

  public logout() {
    this.loggedInUser$.next(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['login']);
  }

  public authenticate(): User {
    return this.loggedInUser$.getValue();
  }

  get user(): Observable<User> {
    return this.loggedInUser$;
  }
}
