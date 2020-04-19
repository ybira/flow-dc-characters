import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-default">
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
          <li><a href="#">Logged in as: Test Elek (LOGOUT)</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
