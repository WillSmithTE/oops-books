import * as angular from 'angular';

export class HomeController {
    public static count: number = 2;
    public static CONTROLLER_NAME: string = 'HomeController';

    constructor() {
        HomeController.count = 2;
    }
}

export function initHomeController() {
    angular.module('app').controller(HomeController.CONTROLLER_NAME, HomeController);
}


