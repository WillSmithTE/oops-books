import * as angular from 'angular';
import { SellController } from './controllers/SellController';
import { AuthController } from './controllers/AuthController';

export function routes($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
        .state('root', {
            templateUrl: 'partials/home.html',
            controller: 'RootController as rootCtrl'
        })
        .state('root.home', {
            url: '/',
            controller: 'RootController as rootCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/mainPage.html',
                    controller: 'RootController as rootCtrl'
                }
            }
        })
        .state('root.book', {
            url: '/book',
            controller: 'RootController as rootCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/book.html',
                    controller: 'BookController as bookCtrl'
                }
            }
        })
        .state('root.sell', {
            url: '/sell',
            views: {
                mainContent: {
                    templateUrl: 'partials/sell.html',
                    controller: SellController.CONTROLLER_NAME + ' as sellCtrl'
                }
            }
        })
        .state('root.request', {
            url: '/request',
            views: {
                mainContent: {
                    templateUrl: 'partials/request.html'
                }
            }
        })
        .state('root.about', {
            url: '/about',
            views: {
                mainContent: {
                    templateUrl: 'partials/about.html'
                }
            }
        })
        .state('account', {
            url: '/account',
            templateUrl: 'partials/account.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: `${AuthController.CONTROLLER_NAME} as authCtrl`
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: `AuthController as authCtrl`
        })
        .state('root.cart', {
            url: '/cart',
            views: {
                mainContent: {
                    templateUrl: 'partials/cart.html'
                }
            }
        })
        .state('forgotPassword', {
            url: '/forgotpassword',
            templateUrl: 'partials/forgotPassword.html'
        });

    $urlRouterProvider.otherwise('/');
}
