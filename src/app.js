System.register(["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            }
        ],
        execute: function () {
            //import {MainController} from './main.controller';
            angular
                .module('app', []);
            angular
                .bootstrap(document.documentElement, ['app'], {
                strictDi: true
            });
        }
    };
});
//# sourceMappingURL=app.js.map