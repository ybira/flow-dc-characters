import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmDeleteDirective } from '../directives/confirm-delete.directive';
import { ConfirmDeleteModalComponent } from '../modals/confirm-delete-modal.component';
import { Character } from '../model/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-details',
  template: `
    <div class="panel panel-default">
      <p><strong>Name:</strong> {{ character.name | uppercase }}</p>
      <p><strong>Affiliation:</strong> {{ character.affiliation }}</p>
      <p><strong>Planet:</strong> {{ character.address.planet }}</p>
      <p><strong>City:</strong> {{ character.address.city }}</p>
      <p><strong>Alignment:</strong> {{ character.alignment | alignment }}</p>
      <p><strong>Skills:</strong> {{ character.skills | skills | uppercase }}</p>
      <p><strong>Created at:</strong> {{ character.createdAt | date }}</p>
      <p><strong>Updated at:</strong> {{ character.updatedAt | date: 'fullDate' }}</p>
      <button class="btn btn-primary" (click)="onUpdate()">
        Update
      </button>
      <button class="btn btn-danger" (click)="toggleModal()">
        Delete
      </button>
    </div>

    <ng-template appConfirmDelete></ng-template>
  `,
  styles: [
    `
      .panel {
        width: 50%;
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
      }
    `,
  ],
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  public character: Character;
  @ViewChild(ConfirmDeleteDirective, { static: false }) modalHost: ConfirmDeleteDirective;

  public subscriptions: Subscription[] = [];

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.character = data.character;
    });
  }

  public onUpdate() {
    this.router.navigate(['..', 'edit', this.character.id], {
      relativeTo: this.route,
    });
  }

  public toggleModal() {
    this.openConfirmModal();
  }

  public onDelete() {
    this.charactersService.deleteCharacter(this.character.id).subscribe(
      (char) => {
        this.router.navigate(['characters'], {
          relativeTo: this.route,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public openConfirmModal() {
    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmDeleteModalComponent);
    this.modalHost.viewContainerRef.clear();
    const modal = this.modalHost.viewContainerRef.createComponent(modalFactory);

    modal.instance.name = this.character.name;
    this.subscriptions.push(
      modal.instance.close.subscribe(() => {
        this.modalHost.viewContainerRef.clear();
      })
    );

    this.subscriptions.push(
      modal.instance.confirm.subscribe(() => {
        this.onDelete();
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
