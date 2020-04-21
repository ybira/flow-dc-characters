import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address, Alignment, Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-add-character',
  template: `
    <div class="panel panel-default">
      <div class="panel-body">
        <form [formGroup]="addForm" (ngSubmit)="onAdd()">
          <div
            class="form-group"
            [ngClass]="{ 'has-error': addForm.get('name').invalid && addForm.get('name').touched }"
          >
            <label class="control-label" for="name">Name</label>
            <input type="text" class="form-control" id="name" formControlName="name" />
            <span class="help-block" *ngIf="addForm.get('name').invalid && addForm.get('name').touched"
              >Name is required!</span
            >
          </div>
          <div
            formGroupName="address"
            [ngClass]="{ 'has-error': addForm.get('address').invalid && addForm.get('address').touched }"
          >
            <div class="form-group">
              <label class="control-label" for="planet">Planet</label>
              <input type="text" class="form-control" id="planet" formControlName="planet" />
            </div>
            <div class="form-group">
              <label class="control-label" for="city">City</label>
              <input type="text" class="form-control" id="city" formControlName="city" />
            </div>
          </div>
          <div
            class="form-group"
            [ngClass]="{ 'has-error': addForm.get('affiliation').invalid && addForm.get('affiliation').touched }"
          >
            <label class="control-label" for="affiliation">Affiliation</label>
            <input type="text" class="form-control" id="affiliation" formControlName="affiliation" />
          </div>
          <div
            class="form-group"
            [ngClass]="{ 'has-error': addForm.get('alignment').invalid && addForm.get('alignment').touched }"
          >
            <label class="control-label">Alignment</label>
            <div class="radio" *ngFor="let alignment of alignments">
              <input type="radio" [value]="alignment" formControlName="alignment" />
              {{ alignment }}
            </div>
          </div>
          <!--          <div class="form-group">-->
          <!--            <label class="control-label">Skills</label>-->
          <!--            <div class="form-group" *ngFor="let skill of character.skills">-->
          <!--              <input type="text" class="form-control" disabled [value]="skill" />-->
          <!--            </div>-->
          <!--            <div class="form-group">-->
          <!--              <input type="text" class="form-control" [(ngModel)]="currentSkill" />-->
          <!--            </div>-->
          <!--            <br />-->
          <!--            <button type="button" class="btn btn-default" (click)="onAddSkill()">-->
          <!--              New Skill-->
          <!--            </button>-->
          <!--          </div>-->
          <button class="btn btn-primary" type="submit" [disabled]="addForm.invalid">
            Add New Character
          </button>
          <!--          <button class="btn btn-primary" type="button" [routerLink]="['../../characters']" (click)="onReset()">-->
          <!--            Reset-->
          <!--          </button>-->
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
export class AddCharacterComponent implements OnInit {
  public alignments: Alignment[] = [Alignment.GOOD, Alignment.BAD];
  public currentSkill: string;

  public addForm: FormGroup;

  constructor(private charactersService: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormGroup({
        planet: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
      }),
      affiliation: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      alignment: new FormControl(null, Validators.required),
    });
  }

  public onAdd() {
    console.log(this.addForm.getRawValue());
    // this.character.name = this.name.nativeElement.value;
    // this.character.address = {
    //   planet: planet.value,
    //   city: city.value,
    // };
    // this.charactersService.addCharacter(this.character);
    // this.router.navigate(['characters']);
    // this.onReset();
  }

  // public onAddSkill() {
  //   this.character.skills.push(this.currentSkill);
  //   this.currentSkill = null;
  // }
  //
  // public onReset() {
  //   this.character = {
  //     skills: [],
  //     address: {} as Address,
  //   } as Character;
  // }
}
