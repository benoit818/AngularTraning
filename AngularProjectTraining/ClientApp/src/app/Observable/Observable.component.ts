import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ObservableTutorial',
  templateUrl: './Observable.component.html',
  styleUrls: []
})
export class ObservableComponent  {

  divisibleByThreeObservable: Observable<{ isDivisibleByThree: false, number: 0 }>;
  firstSubscription: Subscription;
  subscriberOneValue: number = 0;
  isSubsriverOneDivisible: boolean;
  

  ngOnInit() {

    this.divisibleByThreeObservable = Observable.create((observer) => {

      let number = 0;

      setInterval(() => {
        if (number % 3 == 0) {
          observer.next({ isDivisibleByThree: true, number: number })
        }
        else {
          observer.next({ isDivisibleByThree: false, number: number })
        }
        number++;
      }, 500);

    });
  }

  subscribe() {
    this.firstSubscription = this.divisibleByThreeObservable.subscribe({
      next: (value) => {
        console.log(`Subscriber 1 - Number:  ${value.number}
          ${value.isDivisibleByThree ? `is` : `is not`} divisible by three.`);
        this.subscriberOneValue = value.number;
        this.isSubsriverOneDivisible = value.isDivisibleByThree;
    }
     });
  }

  unsubscribe() {
    this.firstSubscription.unsubscribe();
  }
}
