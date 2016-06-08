/**
 * Created by LeonL64 on 6/6/2016.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";

@Component({
    selector: 'my-app-matrix',
    templateUrl: 'app/matrix/matrix.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class MatrixComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;

    @ViewChild("myCanvas") myCanvas: ElementRef;

    ngOnInit() {
    }

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext("2d");
        this.width = canvas.width = window.innerWidth;
        this.height = canvas.height = window.innerHeight;

        this.render();

    }

    render() {

        requestAnimationFrame(() => this.render());

    }
}