import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  template: `
    <app-character></app-character>
    <app-character></app-character>
    <p>{{ currentName }}</p>
    <input type="text" [(ngModel)]="name" />
    <p *ngIf="!name; else press">Please enter a name!</p>
    <ng-template #press>
      <p>Press add to add the name!</p>
    </ng-template>
    <button
      class="btn btn-primary"
      [disabled]="isAddAllowed()"
      (click)="onAdd()"
    >
      Add new character
    </button>
    <button class="btn btn-danger" (click)="disallowAdd = !disallowAdd">
      {{ disallowAdd ? 'Enable Add' : 'Disable Add' }}
    </button>
  `,
  styles: [``]
})
export class CharactersComponent implements OnInit {
  public disallowAdd = false;
  public name: string;
  public currentName: string;

  constructor() {}

  ngOnInit(): void {}

  public isAddAllowed() {
    return this.disallowAdd;
  }

  public onAdd() {
    this.currentName = this.name;
    this.name = null;
  }
}
