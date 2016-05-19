import { Component } from '@angular/core';
import {UnderscoreComponent} from "./underscore/underscore.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [UnderscoreComponent]
})
export class AppComponent { }