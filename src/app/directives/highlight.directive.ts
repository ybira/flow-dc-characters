import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.boxShadow') public boxShadow = 'none';

  constructor() {}

  @HostListener('mouseenter') public mouseEnter() {
    this.boxShadow = '5px 5px 4px rgba(0, 0, 0, .5)';
  }

  @HostListener('mouseleave') public mouseLeave() {
    this.boxShadow = 'none';
  }
}
