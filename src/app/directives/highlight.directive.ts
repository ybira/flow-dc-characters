import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private readonly elementRef: ElementRef) {}
  public ngOnInit(): void {
    this.elementRef.nativeElement.style.boxShadow =
      '5px 5px 4px rgba(0, 0, 0, .5)';
  }
}
