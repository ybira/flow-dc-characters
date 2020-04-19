import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Injectable({ providedIn: 'root' })
export class CharacterResolver implements Resolve<Character> {
  constructor(private charactersService: CharactersService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Character> | Promise<Character> | Character {
    const id = +route.params.id;
    return this.charactersService.fetchCharacter(id);
  }
}
