import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[popup]',
    inputs: ['message'],
    host: {
        '(click)': 'displayMessage()',
        '(mouseover)': 'displayMessage()'
    }
})
export class PopupDirective implements OnInit {
    message: String;

    constructor(_elementRef: ElementRef) {
        console.log('Directive bound');
        console.log(_elementRef);
    }

    ngOnInit() { }

    displayMessage(): void {
        alert(this.message);
    }

}