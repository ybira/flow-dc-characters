import { Component } from '@angular/core';
import { Alignment, Character } from './model/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public characters: Character[] = [
    {
      name: 'Batman',
      affiliation: 'Justice League',
      alignment: Alignment.GOOD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['money', 'tech']
    },
    {
      name: 'Joker',
      affiliation: 'Injustice League',
      alignment: Alignment.BAD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['tech', 'intellect']
    }
  ];

  public onAdd(character: Character) {
    this.characters.push(character);
  }
}
