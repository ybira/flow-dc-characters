import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <div>
      <button class="btn btn-primary" routerLink="/characters">
        All
      </button>
      <button
        class="btn btn-primary"
        routerLink="/characters"
        [queryParams]="{ filter: 'good' }"
        fragment="Heroes"
      >
        Heroes
      </button>
      <button
        class="btn btn-primary"
        routerLink="/characters"
        [queryParams]="{ filter: 'bad' }"
        fragment="Villains"
      >
        Villains
      </button>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        flex-direction: column;
        margin: 0 2rem 0 0;
      }
      button {
        margin: 0.5rem;
      }
    `
  ]
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
