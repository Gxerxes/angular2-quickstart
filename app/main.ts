import {provide} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import {MODAL_BROWSER_PROVIDERS} from "angular2-modal/platform-browser";

bootstrap(AppComponent, [...MODAL_BROWSER_PROVIDERS]);
// function main() {
//     return bootstrap(AppComponent, [
//         ...MODAL_BROWSER_PROVIDERS
//         // you'r app providers here...
//     ])
//         .catch(err => console.error(err));
// }
//
// document.addEventListener('DOMContentLoaded', main);