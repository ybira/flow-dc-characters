import { HttpErrorResponse } from '@angular/common/http';
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
      <div class="alert alert-danger" *ngIf="errors">
        <p *ngFor="let error of errors">{{ error }}</p>
      </div>
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

      .alert {
        margin-top: 1rem;
        margin-bottom: 0;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  public errors: string[];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onLogin(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      () => {
        this.router.navigate(['characters']);
      },
      (error: HttpErrorResponse) => {
        this.errors = error.error.message;
      }
    );
  }
}
