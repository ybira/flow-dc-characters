import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
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
import { SkillsPipe } from './pipes/skills.pipe';
import { AlignmentPipe } from './pipes/alignment.pipe';

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
    ObservableComponent,
    SkillsPipe,
    AlignmentPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
