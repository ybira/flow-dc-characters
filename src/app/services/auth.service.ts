import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role, User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { id: 1, fullName: 'Admin Test', email: 'admin@test.com', role: Role.ADMIN },
    { id: 2, fullName: 'Editor Test', email: 'editor@test.com', role: Role.EDITOR },
    { id: 3, fullName: 'Reader Test', email: 'reader@test.com', role: Role.READER },
  ];
  private loggedInUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  public login(email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const user = this.users.find((u) => u.email === email);
        if (user) {
          this.loggedInUser$.next(user);
          resolve(true);
        }
        reject(false);
      }, 500);
    });
  }

  public logout() {
    this.loggedInUser$.next(null);
  }

  public authenticate(): User {
    return this.loggedInUser$.getValue();
  }

  get user(): Observable<User> {
    return this.loggedInUser$;
  }
}
