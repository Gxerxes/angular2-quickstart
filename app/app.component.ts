import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {TransclusionComponent} from "./transclusion/transclusion.component";

import * as NProgress from 'nprogress';
import {Ng2Component} from "./ng2bootstrap/ng2.component";
import {FullCalendarComponent} from "./fullcalendar/fullcalendar.component";
// import {Modal} from "angular2-modal/angular2-modal";
import {Modal, BS_MODAL_PROVIDERS} from "angular2-modal/plugins/bootstrap";
import {BS_VIEW_PROVIDERS} from "ng2-bootstrap/ng2-bootstrap";
//declare var NProgress: any;
declare var swal: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[PopupComponent, TransclusionComponent, Ng2Component, FullCalendarComponent],
    viewProviders: [BS_MODAL_PROVIDERS, BS_VIEW_PROVIDERS]
})
export class AppComponent implements OnInit{

    ngOnInit() {
        NProgress.start();

        setTimeout(NProgress.done, 3000);

        setTimeout(swal('Hello world'), 3000);

        setTimeout(this.swalTest, 5000);
    }

    public constructor(public modal: Modal, public viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        modal.defaultViewContainer = viewContainerRef;
    }
    
    openAlert() {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .open();
    }

    swalTest() {
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then(function() {
            swal(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
            );
        }, function(dismiss) {
            // dismiss can be 'cancel', 'overlay', 'close', 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                );
            }
        });
    }

}