import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  template: `
    <p #title>{{ text }}</p>
    <ng-content></ng-content>
  `
})
export class LifecyclesComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() public text: string;
  @ViewChild('title', { static: true }) public title: ElementRef;
  @ContentChild('textElement', { static: true }) public textElement: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.title.nativeElement.textContent);
    console.log(this.textElement.nativeElement.textContent);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.title.nativeElement.textContent);
    console.log(this.textElement.nativeElement.textContent);
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.title.nativeElement.textContent);
    console.log(this.textElement.nativeElement.textContent);
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
