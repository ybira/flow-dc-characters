import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `<p>I am Batman!</p>`,
  styles: [`
    p {
      color: grey;
    }
  `]
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
