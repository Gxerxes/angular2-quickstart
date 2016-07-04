import { Component, OnInit, ViewContainerRef, DynamicComponentLoader  } from '@angular/core';
import {TOOLTIP_DIRECTIVES, BUTTON_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";
import {Dragula, DragulaService} from "ng2-dragula/ng2-dragula";

@Component({
    moduleId: module.id,
    selector: 'ng2-component-demo',
    templateUrl: 'ng2.component.html',
    directives: [TOOLTIP_DIRECTIVES, BUTTON_DIRECTIVES, SELECT_DIRECTIVES, Dragula],
    providers: [DragulaService],
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
    .wrapper {
      display: table;
    }
    .container {
      display: table-cell;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
        .container:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .container div,
    .gu-mirror {
      margin: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 0.4s ease-in-out;
    }
    .container div {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
  `]
})
export class Ng2Component implements OnInit {
    public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];


    constructor(viewContainerRef: ViewContainerRef, loader: DynamicComponentLoader) {
        Object.assign(this, {viewContainerRef, loader});
        Object.assign(TestClass.prototype, {
            foo(arg1, arg2) {
                console.log(arg1 + arg2);
                return arg1 + arg2;
            }
        });

    }

    ngOnInit() {
        console.log(this);
        let t = new TestClass();
        console.log(t.foo(1,2));
    }

}

export class TestClass {

}
