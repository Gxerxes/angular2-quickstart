import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app-flex',
    templateUrl: 'app/flex/flex.component.html'
})
export class FlexComponent implements OnInit{

    ngOnInit() {
        console.log('flex test');
    }
}
