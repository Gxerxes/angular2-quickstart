import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {TransclusionComponent} from "./transclusion/transclusion.component";

import * as NProgress from 'nprogress';
import {Ng2Component} from "./ng2bootstrap/ng2.component";
import {FullCalendarComponent} from "./fullcalendar/fullcalendar.component";
// import {Modal} from "angular2-modal/angular2-modal";
// import {Modal, BS_MODAL_PROVIDERS} from "angular2-modal/plugins/bootstrap/index";
//declare var NProgress: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[PopupComponent, TransclusionComponent, Ng2Component, FullCalendarComponent],
    //viewProviders: [BS_MODAL_PROVIDERS]
})
export class AppComponent implements OnInit{

    ngOnInit() {
        NProgress.start();

        setTimeout(NProgress.done, 3000);
    }

    public constructor(public viewContainer:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        // modal.defaultViewContainer = viewContainer;
    }
    
    openAlert() {
        // return this.modal.alert()
        //     .size('lg')
        //     .showClose(true)
        //     .title('A simple Alert style modal window')
        //     .open()
    }

}