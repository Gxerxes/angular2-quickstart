import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'my-app-rx',
    templateUrl: 'app/rx/rx.component.html'
})
export class RxComponent implements OnInit{

    private _todosObserver: Observer<any>;

    ngOnInit() {
        console.log('Rx test');
        console.clear();
        this.debounceDemo();
    }

    demo1() {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve('promise timeout');
            }, 2000)
        });

        promise.then(value => console.log(value));

        let stream1$ = new Observable(observer => {
            let timeout = setTimeout(() => {
                observer.next('observable timeout')
            }, 2000);

            return () => {
                clearTimeout(timeout);
            }
        });

        let disposable = stream1$.subscribe(value => console.log(value));
    }

    demo2() {
        let stream2$ = new Observable(observer => {
            let count = 0;
            let interval = setInterval(() => {
                observer.next(count++);
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        });

        let disposable2 = stream2$.subscribe(value => console.log(value));
        console.log(disposable2);

        setTimeout(() => {
            disposable2.unsubscribe();
        }, 5000);
    }

    demo3() {
        let stream3$ = new Observable(observer => this._todosObserver = observer);

        let disposable3 = stream3$.subscribe(value => console.log(value));

        let count = 0;
        let internal = setInterval(() => {
            this._todosObserver.next(count++);
        }, 1000);

        setTimeout(() => {
            disposable3.unsubscribe();
        }, 5000);
    }

    debounceDemo() {
        let times = [
            { value: 0, time: 100 },
            { value: 1, time: 600 },
            { value: 2, time: 400 },
            { value: 3, time: 700 },
            { value: 4, time: 200 }
        ];

        // Delay each item by time and project value;
        let source = Rx.Observable.from(times)
            .flatMap(function (item) {
                return Rx.Observable
                    .of(item.value)
                    .delay(item.time);
            }).debounceTime(500);

        let subscription = source.subscribe(
            function (x) {
                console.log('Next: %s', x);
            },
            function (err) {
                console.log('Error: %s', err);
            },
            function () {
                console.log('Completed');
            });
    }
}