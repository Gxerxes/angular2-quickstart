/**
 * Created by LeonL64 on 6/6/2016.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var THREE: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-tweening',
    // styleUrls: ['tweening.component.css'],
    templateUrl: 'tweening.component.html'
})
export class TweeningComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;


    // @ViewChild("myCanvas") myCanvas: ElementRef;

    ngOnInit() {
        (<any>window).System.import('app/css3d_periodictable.js').then(comp => {

        }).catch(function (err) {
            console.log(err)
        });
    }

    ngAfterViewInit() {
        // let canvas = this.myCanvas.nativeElement;
        // this.context = canvas.getContext("2d");
        // this.width = canvas.width = window.innerWidth;
        // this.height = canvas.height = window.innerHeight;
        //
        // this.render();

    }

    render() {

        requestAnimationFrame(() => this.render());

    }
    
}