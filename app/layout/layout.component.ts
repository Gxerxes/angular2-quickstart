import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app-layout',
    templateUrl: 'app/layout/layout.component.html'
})
export class LayoutComponent implements OnInit{

    ngOnInit() {
        console.log('flex test');
    }
}

