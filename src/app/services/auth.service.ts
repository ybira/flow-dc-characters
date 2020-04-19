import { Injectable } from '@angular/core';
import { Role, User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { id: 1, fullName: 'Admin Test', email: 'admin', role: Role.ADMIN },
    { id: 2, fullName: 'Editor Test', email: 'editor', role: Role.EDITOR },
    { id: 3, fullName: 'Reader Test', email: 'reader', role: Role.READER }
  ];
  private loggedInUser: User;

  public login(email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const user = this.users.find(u => u.email === email);
        if (user) {
          this.loggedInUser = user;
          resolve(true);
        }
        reject(false);
      }, 500);
    });
  }

  public logout() {
    this.loggedInUser = null;
  }

  public authenticate(): User {
    return this.loggedInUser;
  }

  public authenticateAsync(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedInUser);
      }, 100);
    });
  }
}
