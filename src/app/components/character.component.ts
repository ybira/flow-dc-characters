import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character',
  template: `
    <div class="panel panel-default" [ngClass]="character.alignment">
      <div class="panel-body">
        <h4>{{ character.name }}</h4>
      </div>
    </div>
  `,
  styles: [
    `
      h4 {
        text-align: center;
      }

      .good {
        background-color: #3a96f2;
        color: white;
      }

      .bad {
        background-color: #f23a3a;
      }
    `
  ]
})
export class CharacterComponent implements OnInit {
  @Input() public character: Character;

  constructor() {}

  ngOnInit(): void {}
}
