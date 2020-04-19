import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddCharacterComponent } from './components/add-character.component';
import { CharacterDetailsComponent } from './components/character-details.component';
import { CharacterComponent } from './components/character.component';
import { CharactersComponent } from './components/characters.component';
import { FilterComponent } from './components/filter.component';
import { HeaderComponent } from './components/header.component';
import { LifecyclesComponent } from './components/lifecycles.component';
import { LoginComponent } from './components/login.component';
import { ObservableComponent } from './components/observable.component';
import { UpdateCharacterComponent } from './components/update-character.component';
import { AlignmentDirective } from './directives/alignment.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

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
    HeaderComponent,
    UpdateCharacterComponent,
    FilterComponent,
    CharacterDetailsComponent,
    LoginComponent,
    ObservableComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
