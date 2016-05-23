import { Component } from '@angular/core';
import {TrigonometryComponent} from "./trigonometry/trigonometry.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TrigonometryComponent]
})
export class AppComponent { }