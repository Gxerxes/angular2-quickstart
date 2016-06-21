import { Component, OnInit } from '@angular/core';
import {PopupDirective} from "./popup.directive";

@Component({
    moduleId: module.id,
    directives: [PopupDirective],
    selector: 'popup-sample-app',
    templateUrl: 'popup.component.html'
})
export class PopupComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}