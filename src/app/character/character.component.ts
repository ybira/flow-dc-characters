import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `
    <p>{{ 'Name:' }} {{ name }} Age: {{ 10 }} {{ showAffiliation() }}</p>
  `,
  styles: [``]
})
export class CharacterComponent implements OnInit {
  public name = 'Batman';
  public affiliation = 'Justice League';

  constructor() {}

  ngOnInit(): void {}

  public showAffiliation(): string {
    return this.affiliation;
  }
}
