import { Component, OnInit } from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {TransclusionComponent} from "./transclusion/transclusion.component";

import * as NProgress from 'nprogress';
import {Ng2Component} from "./ng2bootstrap/ng2.component";
//declare var NProgress: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[PopupComponent, TransclusionComponent, Ng2Component]
})
export class AppComponent implements OnInit{

    ngOnInit() {
        NProgress.start();

        setTimeout(NProgress.done, 3000);
    }
}