/**
 * Created by LeonL64 on 6/6/2016.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app-fractal',
    templateUrl: 'app/fractal/fractal.component.html'
})
export class FractalComponent implements OnInit, AfterViewInit {
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
