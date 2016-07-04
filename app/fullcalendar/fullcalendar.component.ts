import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
// import jQuery from 'jquery';
import * as FC from 'FC';

declare var jQuery: any;
declare var FC: any;
@Component({
    moduleId: module.id,
    selector: 'full-canlendar',
    templateUrl: 'fullcalendar.component.html'
})
export class FullCalendarComponent implements OnInit, AfterViewInit {
    el: ElementRef;
    constructor(el: ElementRef) {
        this.el  = el;
        //Object.assign(this, el);
    }

    ngOnInit() {
        jQuery(document).ready(function() {

            // page is now ready, initialize the calendar...

            // jQuery('#calendar').fullCalendar({
            //     // put your options and callbacks here
            // })

        });
     }

    ngAfterViewInit() {
        console.log(this.el);
        //console.log(FC);
        jQuery('#calendar').fullCalendar({
            // put your options and callbacks here
        })


    }

}