import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'name.component.html'
})
export class ComponentNameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {

    constructor() { }

}