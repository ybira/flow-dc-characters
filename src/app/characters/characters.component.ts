import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  template: `
    <app-character></app-character>
    <app-character></app-character>
    <button class="btn btn-primary" [disabled]="isAddAllowed()">
      Add new character
    </button>
  `,
  styles: [``]
})
export class CharactersComponent implements OnInit {
  public disallowAdd = false;

  constructor() {}

  ngOnInit(): void {}

  public isAddAllowed() {
    return this.disallowAdd;
  }
}
