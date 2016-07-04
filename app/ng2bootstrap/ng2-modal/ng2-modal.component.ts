import {
    Component, OnInit, ViewContainerRef, DynamicComponentLoader, AfterViewInit, Input,
    ViewChild, ElementRef
} from '@angular/core';
import {TOOLTIP_DIRECTIVES, BUTTON_DIRECTIVES, MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from "ng2-bootstrap/ng2-bootstrap";
import {CORE_DIRECTIVES} from "@angular/common";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";

@Component({
    moduleId: module.id,
    selector: 'ng2-modal',
    templateUrl: 'ng2-modal.component.html',
    viewProviders: [BS_VIEW_PROVIDERS],
    directives: [MODAL_DIRECTVES, CORE_DIRECTIVES, SELECT_DIRECTIVES]
})
export class Ng2ModalComponent implements AfterViewInit{

    @Input() params: any;

    modalBody: any;
    @ViewChild('smModal') modal:ElementRef;

    constructor() {
        console.log(this);
    }

    ngAfterViewInit() {
        console.log(this.params);
    }

    // showModal(modalBody: any) {
    //     if(modalBody != undefined) {
    //         this.modalBody = modalBody;
    //         this.modal.show();
    //     }
    // }
}