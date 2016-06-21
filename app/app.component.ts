import { Component } from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {TransclusionComponent} from "./transclusion/transclusion.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[PopupComponent, TransclusionComponent]
})
export class AppComponent { }