import { Component, OnInit } from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {TransclusionComponent} from "./transclusion/transclusion.component";

declare var NProgress: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[PopupComponent, TransclusionComponent]
})
export class AppComponent implements OnInit{

    ngOnInit() {
        NProgress.start();

        setTimeout(NProgress.done, 3000);
    }
}