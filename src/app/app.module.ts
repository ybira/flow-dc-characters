import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCharacterComponent } from './components/add-character.component';
import { CharacterComponent } from './components/character.component';
import { CharactersComponent } from './components/characters.component';
import { LifecyclesComponent } from './components/lifecycles.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    AddCharacterComponent,
    LifecyclesComponent,
    HighlightDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
