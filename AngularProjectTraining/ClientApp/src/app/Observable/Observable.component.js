"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let ObservableComponent = class ObservableComponent {
    constructor() {
        this.subscriberOneValue = 0;
    }
    ngOnInit() {
        this.divisibleByThreeObservable = rxjs_1.Observable.create((observer) => {
            let number = 0;
            setInterval(() => {
                if (number % 3 == 0) {
                    observer.next({ isDivisibleByThree: true, number: number });
                }
                else {
                    observer.next({ isDivisibleByThree: false, number: number });
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
};
ObservableComponent = __decorate([
    core_1.Component({
        selector: 'app-ObservableTutorial',
        templateUrl: './Observable.component.html',
        styleUrls: []
    })
], ObservableComponent);
exports.ObservableComponent = ObservableComponent;
//# sourceMappingURL=Observable.component.js.map