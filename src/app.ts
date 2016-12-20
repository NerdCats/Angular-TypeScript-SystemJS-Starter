import * as angular from 'angular';
//import {MainController} from './main.controller';

angular
    .module('app', []);

angular
    .bootstrap(document.documentElement, ['app'], {
        strictDi: true
    });