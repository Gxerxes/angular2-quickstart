/**
 * Created by LeonL64 on 6/21/2016.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[message]',
    inputs: ['header'],
    host: {
        'class': 'ui message'
    },
    templateUrl: 'transclusion.component.html'
})
export class MessageComponent implements OnInit {
    header: string;

    constructor() { }

    ngOnInit(): void {
        console.log('header', this.header);
    }
}

@Component({
    selector: 'transclusion-sample-app',
    directives: [MessageComponent],
    template: `
        <div message header="My Message">
            This is the content of the message
        </div>
    `
    
})
export class TransclusionComponent{}