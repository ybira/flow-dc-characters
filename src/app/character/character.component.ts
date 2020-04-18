import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `
    <div
      [ngStyle]="{ backgroundColor: getColor() }"
      [ngClass]="{ white: getColor() === 'blue' }"
    >
      {{ 'Name:' }} {{ name }} Age: {{ 10 }} {{ showAffiliation() }}
      <div [ngSwitch]="alignment">
        <p *ngSwitchCase="'good'">He/She is Good</p>
        <p *ngSwitchCase="'bad'">He/She is Bad</p>
        <p *ngSwitchDefault>Unknown</p>
      </div>
    </div>
  `,
  styles: [
    `
      .white {
        color: white;
      }
    `
  ]
})
export class CharacterComponent implements OnInit {
  public name = 'Batman';
  public affiliation = 'Justice League';
  public alignment;

  constructor() {
    this.alignment = Math.random() > 0.5 ? 'good' : 'bad';
  }

  ngOnInit(): void {}

  public showAffiliation(): string {
    return this.affiliation;
  }

  public getColor() {
    return this.alignment === 'good' ? 'blue' : 'red';
  }
}
