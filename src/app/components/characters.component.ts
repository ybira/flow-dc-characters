import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <h3>
      Character list<span *ngIf="fragment"> (only {{ fragment }})</span>
    </h3>
    <div class="row">
      <app-filter></app-filter>
      <div class="row" style="flex-wrap: wrap">
        <app-character
          *ngFor="let character of characters"
          [character]="character"
        >
          <h4>{{ character.name }}</h4>
        </app-character>
      </div>
    </div>
    <router-outlet></router-outlet>
    <app-observable></app-observable>
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
        width: 100%;
      }

      h4 {
        text-align: center;
      }
    `
  ]
})
export class CharactersComponent implements OnInit {
  public characters: Character[];
  public fragment: string;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.characters = this.charactersService.fetchCharacters(
        queryParams.filter
      );
    });
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
}
