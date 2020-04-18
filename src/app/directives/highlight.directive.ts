import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  public ngOnInit(): void {}

  @HostListener('mouseenter') public mouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '5px 5px 4px rgba(0, 0, 0, .5)'
    );
  }

  @HostListener('mouseleave') public mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
  }
}
