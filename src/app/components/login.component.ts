import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="panel panel-default">
      <form (ngSubmit)="onLogin(form)" #form="ngForm">
        <div class="form-group" [ngClass]="{ 'has-error': email.invalid && email.touched }">
          <label class="control-label" for="email">Email</label>
          <input type="text" id="email" class="form-control" name="email" #email="ngModel" ngModel required email />
          <span class="help-block" *ngIf="email.invalid && email.touched">Email is invalid!</span>
        </div>
        <div class="form-group" [ngClass]="{ 'has-error': password.invalid && password.touched }">
          <label class="control-label" for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            #password="ngModel"
            ngModel
            required
          />
          <span class="help-block" *ngIf="password.invalid && password.touched">Password is required!</span>
        </div>
        <button class="btn btn-primary" type="submit" [disabled]="form.invalid">
          Login
        </button>
      </form>
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
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onLogin(form: NgForm) {
    this.authService
      .login(form.value.email)
      .then(() => {
        this.router.navigate(['characters']);
      })
      .catch(() => {
        console.log('invalid email');
      });
  }
}
