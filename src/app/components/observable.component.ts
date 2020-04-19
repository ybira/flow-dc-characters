import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: ``
})
export class ObservableComponent implements OnInit, OnDestroy {
  public subscription$: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription$ = timer(1000, 1000).subscribe(n => console.log(n));
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
