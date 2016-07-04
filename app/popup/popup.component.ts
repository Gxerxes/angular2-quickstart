import { Component, OnInit } from '@angular/core';
import {PopupDirective} from "./popup.directive";
import {SimpleNotificationsComponent, NotificationsService, PushNotificationsService } from "notifications";


@Component({
    moduleId: module.id,
    directives: [PopupDirective, SimpleNotificationsComponent],
    providers: [NotificationsService, PushNotificationsService],
    selector: 'popup-sample-app',
    templateUrl: 'popup.component.html'
})
export class PopupComponent implements OnInit {
    constructor(private _service: NotificationsService, private _push: PushNotificationsService) {

    }

    ngOnInit() {
        this._service.success('test', 'test');
    }

    public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true
    }

    createPush() {
        this._push.create({title: "test", body: "bla"})
    }

    createPop() {
        this._service.success('test', 'test');
    }
}