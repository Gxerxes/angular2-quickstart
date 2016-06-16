import { Component } from '@angular/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TrigonometryComponent} from "./trigonometry/trigonometry.component";
import {FractalComponent} from "./fractal/fractal.component";
import {MatrixComponent} from "./matrix/matrix.component";
import {LineIntersectionComponent} from "./line-intersection/line-intersection.component";
import {TweeningComponent} from "./tweening/tweening.component";
import {EasingComponent} from "./easing/easing.component";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdButton, MdAnchor, MdIcon],
    providers: [ROUTER_PROVIDERS, MdIconRegistry]
})
@RouteConfig([
    new Route({path: '/fractal', component: FractalComponent, name:'Fractal', useAsDefault: true}),
    new Route({path: '/trigonometry', component: TrigonometryComponent, name:'Trigonometry' }),
    new Route({path: '/line-intersection', component: LineIntersectionComponent, name:'LineIntersection' }),
    new Route({path: '/matrix', component: MatrixComponent, name:'Matrix' }),
    new Route({path: '/tweening', component: TweeningComponent, name:'Tweening' }),
    new Route({path: '/easing', component: EasingComponent, name:'Easing' })
])
export class AppComponent { }