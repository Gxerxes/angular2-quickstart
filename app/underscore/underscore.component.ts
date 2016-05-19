import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
    selector: 'my-app-underscore',
    templateUrl: 'app/underscore/underscore.component.html'
})
export class UnderscoreComponent implements OnInit{
    
    ngOnInit() {
        console.log('underscore test');
    }
}