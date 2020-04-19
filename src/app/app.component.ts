import { Component } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharactersService, LoggingService]
})
export class AppComponent {
  constructor() {}
}
