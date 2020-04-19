import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddCharacterComponent } from './components/add-character.component';
import { CharacterDetailsComponent } from './components/character-details.component';
import { CharactersComponent } from './components/characters.component';
import { LoginComponent } from './components/login.component';
import { UpdateCharacterComponent } from './components/update-character.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters/new',
    canActivate: [AuthGuard],
    component: AddCharacterComponent
  },
  {
    path: 'characters',
    component: CharactersComponent,
    canActivate: [AuthGuard],
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
