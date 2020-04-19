import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: ``
})
export class ObservableComponent implements OnInit, OnDestroy {
  public subscriptions$: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    const custom = new Observable(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter);
        if (counter === 5) {
          observer.complete();
        }
        if (counter > 5) {
          observer.error('HIBA VAN');
        }
        counter++;
      }, 1000);
    });

    this.subscriptions$.push(
      custom.subscribe(
        n => {
          console.log(n);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('DONE!');
        }
      )
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
