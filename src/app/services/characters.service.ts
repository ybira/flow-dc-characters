import { Injectable } from '@angular/core';
import { Alignment, Character } from '../model/character.model';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(private loggingService: LoggingService) {}

  public characters: Character[] = [
    {
      id: 1,
      name: 'Batman',
      affiliation: 'Justice League',
      alignment: Alignment.GOOD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['money', 'tech']
    },
    {
      id: 2,
      name: 'Joker',
      affiliation: 'Injustice League',
      alignment: Alignment.BAD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['tech', 'intellect']
    }
  ];

  public addCharacter(character: Character) {
    this.loggingService.createLog(
      'ADD',
      `Character created with name: ${character.name}`
    );
    this.characters.push(character);
  }

  public fetchCharacters(): Character[] {
    return [...this.characters];
  }

  public updateCharacter(id: number, character: Character) {
    const index = this.characters.findIndex(char => char.id === id);
    this.characters[index] = character;
  }

  public fetchCharacter(id: number) {
    return { ...this.characters.find(character => character.id === id) };
  }
}
