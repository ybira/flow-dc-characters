import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  template: `
    <app-character></app-character>
    <app-character></app-character>
  `,
  styles: [``]
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
