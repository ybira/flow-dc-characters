import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character',
  template: `
    <div
      class="panel panel-default"
      [appAlignment]="character.alignment === 'good'"
      appHighlight
    >
      <div class="panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [``]
})
export class CharacterComponent implements OnInit {
  @Input() public character: Character;

  constructor() {}

  ngOnInit(): void {}
}
