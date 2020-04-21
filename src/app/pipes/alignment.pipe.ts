import { Pipe, PipeTransform } from '@angular/core';
import { Alignment } from '../model/character.model';

@Pipe({
  name: 'alignment',
})
export class AlignmentPipe implements PipeTransform {
  transform(value: Alignment): string {
    switch (value) {
      case Alignment.BAD:
        return 'Villain';
      case Alignment.GOOD:
        return 'Hero';
    }
  }
}
