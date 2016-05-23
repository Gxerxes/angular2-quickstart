import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'my-app-underscore',
    templateUrl: 'app/underscore/underscore.component.html'
})
export class UnderscoreComponent implements OnInit{
    
    arrTest = [1, 2, 3, 4, 5, 6];

    ngOnInit() {
        console.log('underscore test start');
        this.demo1();
    }

    demo1() {

        let arrCompact = [0, 1, false, 2, '', 3];
        let arrFlatten = [1, [2], [3, [[4]]]];
        let arrWithout = [1, 2, 1, 0, 3, 1, 4];

        console.log(_.first(this.arrTest));
        console.log(_.initial(this.arrTest));
        console.log(_.initial(this.arrTest, 2));
        console.log(_.last(this.arrTest));
        console.log(_.rest(this.arrTest));
        console.log(_.compact(arrCompact));
        console.log(_.flatten(arrFlatten));
        console.log(_.without(arrWithout,1,2));
        console.log('without: ' + arrWithout);
        console.log(_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
        console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
        console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
        console.log(_.uniq(arrWithout));
        console.log(_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]));
        console.log(_.unzip([['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]));
        console.log(_.object(['moe', 'larry', 'curly'], [30, 40, 50]));
        console.log(_.object([['moe', 30], ['larry', 40], ['curly', 50]]));
        console.log(_.indexOf([1, 2, 3], 2));
        console.log(_.lastIndexOf([1, 2, 3, 1, 2, 3], 2));
        console.log(_.sortedIndex([10, 20, 30, 40, 50], 60));
        //console.log(_.findIndex([4, 6, 8, 12],));
        console.log(_.range(10));
        console.log(_.range(1, 20, 2));
    }
}