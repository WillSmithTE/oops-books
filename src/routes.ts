import * as angular from 'angular';

export function routes($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
        .state('home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController as homeCtrl'
        })
        .state('home.page', {
            url: '/',
            controller: 'HomeController as homeCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/mainPage.html',
                    controller: 'HomeController as homeCtrl'
                }
            }
        })
        .state('home.book', {
            url: '/:name',
            controller: 'BookController as bookCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/book.html',
                    controller: 'BookController as bookCtrl'
                }
            }
        })
        .state('sell', {
            url: '/sell',
            templateUrl: 'partials/sell.html'
        })
        .state('request', {
            url: '/request',
            templateUrl: 'partials/request.html'
        })
        .state('account', {
            url: '/account',
            templateUrl: 'partials/account.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })
        .state('home.cart', {
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
        })
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html'
        });
    $urlRouterProvider.otherwise('/');
}
