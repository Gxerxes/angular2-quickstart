import { Component, OnInit, ViewContainerRef, DynamicComponentLoader  } from '@angular/core';
import {TOOLTIP_DIRECTIVES, BUTTON_DIRECTIVES, MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from "ng2-bootstrap/ng2-bootstrap";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";
import {Dragula, DragulaService} from "ng2-dragula/ng2-dragula";
import {CORE_DIRECTIVES} from "@angular/common";
import {Ng2ModalComponent} from "./ng2-modal/ng2-modal.component";

@Component({
    moduleId: module.id,
    selector: 'ng2-component-demo',
    templateUrl: 'ng2.component.html',
    directives: [TOOLTIP_DIRECTIVES, BUTTON_DIRECTIVES, SELECT_DIRECTIVES, Dragula, MODAL_DIRECTVES, CORE_DIRECTIVES, Ng2ModalComponent],
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

    itms: Array<any>;
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

    viewContainerRef: ViewContainerRef;
    constructor(viewContainerRef: ViewContainerRef, loader: DynamicComponentLoader) {
        this.viewContainerRef = viewContainerRef;

        Object.assign(this, {loader});
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
        this.itms = [];
        this.itms.push(1);
        this.itms.push('2');
        this.itms.push(['a', 1]);
        this.itms.push({a: '1'});
        this.itms.push(function test () {

        });
        console.log(this.itms);
    }

}

export class TestClass {

}
