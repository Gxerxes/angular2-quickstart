import { Directive, OnInit, ElementRef } from '@angular/core';

//import * as PNotify from 'pnotify';
//import * as PNotify from 'pnotify.buttons';
// import jQuery from 'jquery';
declare var jQuery: any;

declare var PNotify: any;

@Directive({
    selector: '[popup]',
    inputs: ['message'],
    host: {
        '(click)': 'displayMessage()'
        //'(mouseover)': 'displayMessage()'
    }
})
export class PopupDirective implements OnInit {
    message: String;

    constructor(_elementRef: ElementRef) {
        console.log('Directive bound');
        console.log(_elementRef);
    }

    ngOnInit() {
        //PNotify.prototype.options.styling = "bootstrap3";
    }

    displayMessage(): any {
        //var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

        let message = this.message;

        var notice = new PNotify({
            title: 'Click Notice',
            text: 'I wish someone would click me.'
        });
        notice.get().css('cursor', 'pointer').click(function(e) {
            if (jQuery(e.target).is('.ui-pnotify-closer *, .ui-pnotify-sticker *')) return;
            notice.update({
                type: 'success',
                text: 'Yay, you clicked me!<div style="text-align: center;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/240px-Happy_smiley_face.png" /></div>'
            });
        });

        new PNotify({
            title: 'Custom Styling',
            text: 'I have an additional class that\'s used to give me special styling. I always wanted to be pretty. I also use the nonblock module.',
            addclass: 'custom',
            icon: 'fa fa-file-image-o',
            opacity: .8,
            nonblock: {
                nonblock: true
            }
        });

        new PNotify({
            title: 'Regular Success',
            text: 'That thing that you were trying to do worked!',
            type: 'success'
        });

        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            type: 'error'
        });

        return new PNotify({
            title: 'Regular Notice',
            text: message,
            //stack: stack_bottomright,
            animate_speed: "normal",
            delay: 3000,
            opacity: 1,
            styling: 'brighttheme',
            //hide: false,
            buttons: {
                closer: true
            }
        });

        //jQuery(function (message) {
        //    return new PNotify({
        //        title: 'Regular Notice',
        //        text: 'hello'
        //    });
        //});
        //alert(this.message);
    }

}