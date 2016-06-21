import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app-find-prime',
    templateUrl: './find-prime.component.html'
})
export class FindPrimeComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log(this.getPrime(1000));
        console.log(this.generateRandomArray(10));
        console.log(this.generateRandomArrayES6(10, 10));
    }

    isPrime(num: number): boolean {
        if(num < 2) return false;

        for (let i = 2; i < num; i++) {
            if ( num%i === 0) {
                return false;
            }
        }

        return true;
    }

    getPrime(maxNum: number): Object {
        let arrPrime = [];
        let count = 0;
        for (let i = 0 ; i < maxNum; i++) {
            if(this.isPrime(i)) {
                arrPrime.push(i);
                count++;
            }
        }

        return { Prime: arrPrime, Count: count };
    }

    generateRandomArray(num: number): Array<number> {

        let arr = [];
        
        for (let index = 0; index < num; index++) {
            arr.push(Math.round(Math.random() * index));
        }

        return arr;
    }

    generateRandomArrayES6(length, max) {
        //let randomArray = [];
        let randomArray = [...new Array(length)].map((_, i) => Math.round(Math.random() * max));

        return randomArray;
    }

}