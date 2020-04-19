import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharacterComponent } from './components/add-character.component';
import { CharacterDetailsComponent } from './components/character-details.component';
import { CharactersComponent } from './components/characters.component';
import { UpdateCharacterComponent } from './components/update-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: 'characters/new',
    component: AddCharacterComponent
  },
  {
    path: 'characters',
    component: CharactersComponent,
    children: [
      {
        path: ':id',
        component: CharacterDetailsComponent
      }
    ]
  },
  {
    path: 'characters/edit/:id',
    component: UpdateCharacterComponent
  },
  {
    path: '**',
    redirectTo: '/characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
