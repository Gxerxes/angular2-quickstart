import { Component } from '@angular/core';
import {UnderscoreComponent} from "./underscore/underscore.component";
import {RxComponent} from "./rx/rx.component";
import {FlexComponent} from "./flex/flex.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [UnderscoreComponent,RxComponent,FlexComponent]
})
export class AppComponent { }