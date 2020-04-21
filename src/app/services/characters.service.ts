import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alignment, Character } from '../model/character.model';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(private loggingService: LoggingService, private http: HttpClient) {}

  public characters: Character[] = [
    {
      id: 1,
      name: 'Batman',
      affiliation: 'Justice League',
      alignment: Alignment.GOOD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['money', 'tech'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Joker',
      affiliation: 'Injustice League',
      alignment: Alignment.BAD,
      address: { planet: 'Earth', city: 'Gotham' },
      skills: ['tech', 'intellect'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  public addCharacter(character: Character) {
    return this.http.post<Character>(`http://localhost:3000/api/v1/no-auth/characters`, character);
  }

  public fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('http://localhost:3000/api/v1/no-auth/characters');
  }

  public updateCharacter(id: number, character: Character) {
    const index = this.characters.findIndex((char) => char.id === id);
    this.characters[index] = character;
  }

  public fetchCharacter(id: number) {
    return this.http.get<Character>(`http://localhost:3000/api/v1/no-auth/characters/${id}`);
  }
}
