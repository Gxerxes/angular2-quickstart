import { Component } from '@angular/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TrigonometryComponent} from "./trigonometry/trigonometry.component";
import {FractalComponent} from "./fractal/fractal.component";
import {MatrixComponent} from "./matrix/matrix.component";
import {LineIntersectionComponent} from "./line-intersection/line-intersection.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    new Route({path: '/fractal', component: FractalComponent, name:'Fractal', useAsDefault: true}),
    new Route({path: '/trigonometry', component: TrigonometryComponent, name:'Trigonometry' }),
    new Route({path: '/line-intersection', component: LineIntersectionComponent, name:'LineIntersection' }),
    new Route({path: '/matrix', component: MatrixComponent, name:'Matrix' })
])
export class AppComponent { }