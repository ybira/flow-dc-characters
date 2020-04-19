import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddCharacterComponent } from './components/add-character.component';
import { CharacterComponent } from './components/character.component';
import { CharactersComponent } from './components/characters.component';
import { HeaderComponent } from './components/header.component';
import { LifecyclesComponent } from './components/lifecycles.component';
import { AlignmentDirective } from './directives/alignment.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'add-character',
    component: AddCharacterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    AddCharacterComponent,
    LifecyclesComponent,
    HighlightDirective,
    AlignmentDirective,
    UnlessDirective,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
