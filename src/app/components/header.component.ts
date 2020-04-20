import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-default" *ngIf="user">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">Heroes & Villains</a>
        </div>
        <ul class="nav navbar-nav">
          <li routerLinkActive="active">
            <a routerLink="characters">Character List</a>
          </li>
          <li routerLinkActive="active">
            <a [routerLink]="['characters', 'new']">Add Character</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a (click)="onLogout()"
              >Logged in as: {{ user.fullName }} (LOGOUT)</a
            >
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  public onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
