import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAlignment]'
})
export class AlignmentDirective {
  @Input('appAlignment') set isHero(condition: boolean) {
    this.backgroundColor = condition ? this.heroColor : this.villainColor;
    this.color = condition ? 'white' : 'black';
  }
  @Input() public heroColor = '#3a96f2';
  @Input() public villainColor = '#f23a3a';
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'black';

  constructor() {}
}
