import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-characters',
  template: `
    <div class="row">
      <app-character
        *ngFor="let character of characters"
        [character]="character"
      ></app-character>
    </div>
  `,
  styles: [
    `
      app-character {
        width: 24%;
        margin: 1rem 0.5%;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }
    `
  ]
})
export class CharactersComponent implements OnInit {
  @Input() public characters: Character[];

  constructor() {}

  ngOnInit(): void {}
}
