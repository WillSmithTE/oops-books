import { HomeController } from './controllers/HomeController';

var app = angular.module('app', ['ui.router']);

app.config(
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html'
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
            .state('cart', {
                url: '/cart',
                templateUrl: 'partials/cart.html'
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
);
