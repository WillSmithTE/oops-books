import * as angular from 'angular';

export class HomeController {
    public static CONTROLLER_NAME: string = 'HomeController';
    constructor() {
    }
}

export function initHomeController() {
    angular.module('app').controller(HomeController.CONTROLLER_NAME, HomeController);
}


