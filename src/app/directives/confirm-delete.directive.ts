import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appConfirmDelete]',
})
export class ConfirmDeleteDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
