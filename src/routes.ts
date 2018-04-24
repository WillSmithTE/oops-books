import * as angular from 'angular';

export function routes($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
        .state('home', {
            templateUrl: 'partials/home.html'
        })
        .state('home.page', {
            url: '/',
            controller: 'HomeController',
            views: {
                mainContent: {
                    templateUrl: 'partials/mainPage.html'
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
