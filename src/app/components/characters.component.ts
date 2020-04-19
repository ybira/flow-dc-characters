import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <div class="row">
      <app-character
        *ngFor="let character of characters"
        [character]="character"
      >
        <h4>{{ character.name }}</h4>
      </app-character>
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

      h4 {
        text-align: center;
      }
    `
  ]
})
export class CharactersComponent implements OnInit {
  public characters: Character[];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.characters = this.charactersService.fetchCharacters();
  }
}
