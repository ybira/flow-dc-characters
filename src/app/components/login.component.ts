import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="panel panel-default">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          class="form-control"
          [(ngModel)]="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          class="form-control"
          id="password"
          [(ngModel)]="password"
        />
      </div>
      <button class="btn btn-primary" type="submit" (click)="onLogin()">
        Login
      </button>
    </div>
  `,
  styles: [
    `
      .panel {
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        margin-top: 10%;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onLogin() {
    this.authService
      .login(this.email)
      .then(() => {
        this.router.navigate(['characters']);
      })
      .catch(() => {
        console.log('invalid email');
      });
  }
}
