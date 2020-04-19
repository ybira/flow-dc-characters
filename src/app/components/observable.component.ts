import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  template: ``
})
export class ObservableComponent implements OnInit, OnDestroy {
  public subscriptions$: Subscription[] = [];
  public user: { firstName: string; lastName: string } = {
    firstName: 'Test',
    lastName: 'Elek'
  };

  constructor() {}

  ngOnInit() {
    const custom = new Observable(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(this.user);
        if (counter === 10) {
          observer.complete();
        }
        counter++;
      }, 1000);
    });

    this.subscriptions$.push(
      custom
        .pipe(
          filter((data: any) => {
            return data.firstName === 'Test';
          }),
          map((data: any) => {
            data.fullName = data.firstName + ' ' + data.lastName;
            return data;
          })
        )
        .subscribe(
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
