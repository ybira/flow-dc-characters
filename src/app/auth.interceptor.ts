import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AuthResponse } from './model/auth-response.model';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenized = this.setAccessToken(request);

    return next.handle(tokenized).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.url.includes('login') || error.url.includes('refresh')) {
            if (error.url.includes('refresh')) {
              this.authService.logout();
            }

            return throwError(error);
          } else {
            const refreshToken: string = localStorage.getItem('refreshToken');

            if (!refreshToken) {
              this.authService.logout();
              return throwError(error);
            }

            return this.http.post(environment.baseUrl + 'auth/refresh', { refreshToken }).pipe(
              switchMap((resp: AuthResponse) => {
                localStorage.setItem('accessToken', resp.accessToken);
                localStorage.setItem('refreshToken', resp.refreshToken);
                const refreshed = this.setAccessToken(request);
                return next.handle(refreshed);
              }),
              catchError((err) => {
                return throwError(err);
              })
            );
          }
        }

        return throwError(error);
      })
    );
  }

  private setAccessToken(request: HttpRequest<any>) {
    const token: string = localStorage.getItem('accessToken');

    if (!token) {
      return request;
    }

    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
}
