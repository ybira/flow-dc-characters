import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  template: `
    <app-character></app-character>
    <app-character></app-character>
    <p>{{ name }}</p>
    <input type="text" [(ngModel)]="name" />
    <button
      class="btn btn-primary"
      [disabled]="isAddAllowed()"
      (click)="onChangeInput()"
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

  constructor() {}

  ngOnInit(): void {}

  public isAddAllowed() {
    return this.disallowAdd;
  }

  public onAdd(event: any) {
    this.name = event.target.value;
  }

  public onChangeInput() {
    this.name = 'Superman';
  }
}
