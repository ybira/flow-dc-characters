import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-details',
  template: `
    <div class="panel panel-default">
      <p><strong>Name:</strong> {{ character.name }}</p>
      <p><strong>Affiliation:</strong> {{ character.affiliation }}</p>
      <p><strong>Planet:</strong> {{ character.address.planet }}</p>
      <p><strong>City:</strong> {{ character.address.city }}</p>
      <p><strong>Alignment:</strong> {{ character.alignment }}</p>
      <p><strong>Skills:</strong> {{ character.skills.toString() }}</p>
      <button class="btn btn-primary" (click)="onUpdate()">
        Update
      </button>
    </div>
  `,
  styles: [
    `
      .panel {
        width: 50%;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
      }
    `
  ]
})
export class CharacterDetailsComponent implements OnInit {
  public character: Character;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.character = this.charactersService.fetchCharacter(+params.id);
    });
  }

  public onUpdate() {
    this.router.navigate(['..', 'edit', this.character.id], {
      relativeTo: this.route
    });
  }
}
