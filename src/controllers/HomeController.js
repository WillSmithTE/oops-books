
export function HomeController() {
    return {
        CONTROLLER_NAME: 'HomeController',
        initHomeController: function () {
            angular.module('app').controller(HomeController, HomeController.CONTROLLER_NAME)
        }
    }
}

