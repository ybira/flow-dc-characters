import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `
    <div class="panel panel-default" [ngClass]="alignment">
      <div class="panel-body">
        <p>Name: {{ name }}</p>
        <p>Affiliation: {{ group }}</p>
      </div>
    </div>
  `,
  styles: [
    `
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
  @Input() public name: string;
  @Input('affiliation') public group: string;
  @Input() public alignment: string;

  constructor() {}

  ngOnInit(): void {}
}
