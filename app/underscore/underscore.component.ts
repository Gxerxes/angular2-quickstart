import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'my-app-underscore',
    template: '<h1>test</h1>'
    //templateUrl: 'app/underscore/underscore.component.html'
})
export class UnderscoreComponent implements OnInit{
    
    ngOnInit() {
        console.log(_);
    }
}