import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(private loggingService: LoggingService, private http: HttpClient) {}

  public addCharacter(character: Character) {
    return this.http.post<Character>(`http://localhost:3000/api/v1/no-auth/characters`, character);
  }

  public fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('http://localhost:3000/api/v1/no-auth/characters');
  }

  public updateCharacter(id: number, character: Character) {
    return this.http.put<Character>(`http://localhost:3000/api/v1/no-auth/characters/${id}`, character);
  }

  public fetchCharacter(id: number) {
    return this.http.get<Character>(`http://localhost:3000/api/v1/no-auth/characters/${id}`);
  }
}
