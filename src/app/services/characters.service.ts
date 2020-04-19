import { EventEmitter } from '@angular/core';
import { Alignment, Character } from '../model/character.model';

export class CharactersService {
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

  public addCharacter(character: Character) {
    this.characters.push(character);
  }

  public fetchCharacters(): Character[] {
    return [...this.characters];
  }
}
