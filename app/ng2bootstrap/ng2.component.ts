import { Component, OnInit } from '@angular/core';
import {TOOLTIP_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

@Component({
    moduleId: module.id,
    selector: 'ng2-component-demo',
    templateUrl: 'ng2.component.html',
    directives: [TOOLTIP_DIRECTIVES],
    styles: [`
    /* Specify styling for tooltip contents */
    .tooltip.customClass .tooltip-inner {
        color: #880000;
        background-color: #ffff66;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
    /* Hide arrow */
    .tooltip.customClass .tooltip-arrow {
        display: none;
    }
  `]
})
export class Ng2Component implements OnInit {
    constructor() { }

    ngOnInit() { }

}