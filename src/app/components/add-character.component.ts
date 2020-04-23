import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
            <div>
              <button class="btn btn-default" type="button" (click)="setAddress(0)">Gotham</button>
              <button class="btn btn-default" type="button" (click)="setAddress(1)">Metropolis</button>
              <button class="btn btn-default" type="button" (click)="setAddress(2)">Kandor</button>
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
          <div
            class="form-group"
            formArrayName="skills"
            [ngClass]="{ 'has-error': addForm.get('skills').hasError('duplication') && addForm.get('skills').touched }"
          >
            <label class="control-label">Skills</label>
            <div class="form-group" *ngFor="let skill of skills; let i = index">
              <input type="text" class="form-control" [formControlName]="i" />
            </div>
            <span
              class="help-block"
              *ngIf="addForm.get('skills').hasError('duplication') && addForm.get('skills').touched"
            >
              Values must not be duplicates!
            </span>
            <button type="button" class="btn btn-default" (click)="onAddSkill()">New Skill</button>
          </div>
          <button class="btn btn-primary" type="submit" [disabled]="addForm.invalid">
            Add New Character
          </button>
          <button class="btn btn-primary" type="button" (click)="onReset()">
            Reset
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
export class AddCharacterComponent implements OnInit {
  public alignments: Alignment[] = [Alignment.GOOD, Alignment.BAD];

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
      skills: new FormArray([], this.duplicateSkill.bind(this)),
    });

    // this.addForm.statusChanges.subscribe((data) => {
    //   console.log(data);
    // });
    // this.addForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
  }

  public onAdd() {
    this.charactersService.addCharacter(this.addForm.getRawValue()).subscribe(
      (character) => {
        console.log(character);
        this.router.navigate(['characters']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onAddSkill() {
    const newSkill = new FormControl(null, [Validators.required]);
    (this.addForm.get('skills') as FormArray).push(newSkill);
  }

  get skills() {
    return (this.addForm.get('skills') as FormArray).controls;
  }

  public duplicateSkill(formArray: FormArray) {
    if (this.checkDuplicates(formArray.value as string[])) {
      return { duplication: true };
    } else {
      return null;
    }
  }

  private checkDuplicates(array: string[]): boolean {
    return array.filter((item, index) => array.indexOf(item) !== index).length > 0;
  }

  public onReset() {
    this.addForm.reset();
  }

  public setAddress(type: number) {
    switch (type) {
      case 0:
        this.addForm.patchValue({ address: { planet: 'Earth', city: 'Gotham' } });
        break;
      case 1:
        this.addForm.patchValue({ address: { planet: 'Earth', city: 'Metropolis' } });
        break;
      case 2:
        this.addForm.patchValue({ address: { planet: 'Krypton', city: 'Kandor' } });
        break;
    }
  }
}
