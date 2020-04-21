import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skills',
})
export class SkillsPipe implements PipeTransform {
  transform(skills: string[]): string {
    return skills.join(', ');
  }
}
