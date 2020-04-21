import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OnCanDeactivate } from '../guards/can-deactivate.guard';
import { Alignment, Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-update-character',
  template: `
    <div class="panel panel-default">
      <div class="panel-body">
        <form (ngSubmit)="onUpdate()" #updateForm="ngForm">
          <div class="form-group">
            <label class="control-label" for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" [(ngModel)]="character.name" disabled />
          </div>
          <div id="address" ngModelGroup="address" #address="ngModelGroup">
            <div class="form-group">
              <label class="control-label" for="planet">Planet</label>
              <input
                type="text"
                class="form-control"
                id="planet"
                name="planet"
                required
                [(ngModel)]="character.address.planet"
              />
            </div>
            <div class="form-group">
              <label class="control-label" for="city">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                name="city"
                [(ngModel)]="character.address.city"
                required
              />
            </div>
            <span class="help-block" *ngIf="address.invalid && address.touched">All address fields are required!</span>
            <div>
              <button class="btn btn-default" type="button" (click)="setAddress(0)">Gotham</button>
              <button class="btn btn-default" type="button" (click)="setAddress(1)">Metropolis</button>
              <button class="btn btn-default" type="button" (click)="setAddress(2)">Kandor</button>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="affiliation">Affiliation</label>
            <input
              type="text"
              class="form-control"
              id="affiliation"
              name="affiliation"
              [(ngModel)]="character.affiliation"
            />
          </div>
          <div class="form-group">
            <label class="control-label">Alignment</label>
            <div class="radio" *ngFor="let alignment of alignments">
              <input type="radio" [value]="alignment" name="alignment" [(ngModel)]="character.alignment" />
              {{ alignment }}
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">Skills</label>
            <div class="form-group" *ngFor="let skill of character.skills">
              <input type="text" class="form-control" name="skill" disabled [value]="skill" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="currentSkill" [(ngModel)]="currentSkill" />
            </div>
            <br />
            <button type="button" class="btn btn-default" (click)="onAddSkill()">
              New Skill
            </button>
          </div>
          <button class="btn btn-primary" type="submit">
            Update
          </button>
          <button class="btn btn-primary" type="button" [routerLink]="['/characters']">
            Cancel
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .panel {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
      .radio {
        margin-left: 2rem;
      }
    `,
  ],
})
export class UpdateCharacterComponent implements OnInit, OnCanDeactivate {
  @ViewChild('updateForm') public form: NgForm;
  public alignments: Alignment[] = [Alignment.GOOD, Alignment.BAD];
  public character: Character;
  public currentSkill: string;
  public allowNavigate: boolean;

  constructor(private charactersService: CharactersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.allowNavigate = false;
    this.route.data.subscribe((data) => {
      this.character = data.character;
    });
  }

  public setAddress(type: number) {
    switch (type) {
      case 0:
        this.form.form.patchValue({ address: { planet: 'Earth', city: 'Gotham' } });
        break;
      case 1:
        this.form.form.patchValue({ address: { planet: 'Earth', city: 'Metropolis' } });
        break;
      case 2:
        this.form.form.patchValue({ address: { planet: 'Krypton', city: 'Kandor' } });
        break;
    }
  }

  public onAddSkill() {
    this.character.skills.push(this.currentSkill);
    this.currentSkill = null;
  }

  public onUpdate() {
    this.allowNavigate = true;
    this.charactersService.updateCharacter(this.character.id, this.character).subscribe(
      (char) => {
        console.log(char);
        this.router.navigate(['characters']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowNavigate) {
      return true;
    } else {
      return confirm('You wish to navigate without saving?');
    }
  }
}
