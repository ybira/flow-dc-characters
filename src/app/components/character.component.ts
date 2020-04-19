import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character',
  template: `
    <div
      class="panel panel-default"
      [appAlignment]="character.alignment === 'good'"
      appHighlight
      (click)="onShowDetails()"
    >
      <div class="panel-body">
        <!--        <p *appUnless="character.alignment === 'good'">BEWARE!</p>-->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [``]
})
export class CharacterComponent implements OnInit {
  @Input() public character: Character;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  public onShowDetails() {
    this.router.navigate([this.character.id], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      preserveFragment: true
    });
  }
}
