import * as angular from 'angular';
import { SellController } from './controllers/SellController';
import { AuthController } from './controllers/AuthController';

export const ROOT_STATE = 'root',
HOME_STATE = `${ROOT_STATE}.home`,
BOOK_STATE = `${ROOT_STATE}.book`,
SELL_STATE = `${ROOT_STATE}.sell`,
REQUEST_STATE = `${ROOT_STATE}.request`,
ABOUT_STATE = `${ROOT_STATE}.about`,
CART_STATE = `${ROOT_STATE}.cart`,
ACCOUNT_STATE = `account`,
LOGIN_STATE = `login`,
REGISTER_STATE = `register`,
FORGOT_PASSWORD_STATE = `forgotPassword`;

export function routes($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
        .state(ROOT_STATE, {
            templateUrl: 'partials/home.html',
            controller: 'RootController as rootCtrl'
        })
        .state(HOME_STATE, {
            url: '/',
            controller: 'RootController as rootCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/mainPage.html',
                    controller: 'RootController as rootCtrl'
                }
            }
        })
        .state(BOOK_STATE, {
            url: '/book',
            controller: 'RootController as rootCtrl',
            views: {
                mainContent: {
                    templateUrl: 'partials/book.html',
                    controller: 'BookController as bookCtrl'
                }
            }
        })
        .state(SELL_STATE, {
            url: '/sell',
            views: {
                mainContent: {
                    templateUrl: 'partials/sell.html',
                    controller: SellController.CONTROLLER_NAME + ' as sellCtrl'
                }
            }
        })
        .state(REQUEST_STATE, {
            url: '/request',
            views: {
                mainContent: {
                    templateUrl: 'partials/request.html'
                }
            }
        })
        .state(ABOUT_STATE, {
            url: '/about',
            views: {
                mainContent: {
                    templateUrl: 'partials/about.html'
                }
            }
        })
        .state(ACCOUNT_STATE, {
            url: '/account',
            templateUrl: 'partials/account.html'
        })
        .state(LOGIN_STATE, {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: `${AuthController.CONTROLLER_NAME} as authCtrl`
        })
        .state(REGISTER_STATE, {
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: `AuthController as authCtrl`
        })
        .state(CART_STATE, {
            url: '/cart',
            views: {
                mainContent: {
                    templateUrl: 'partials/cart.html'
                }
            }
        })
        .state(FORGOT_PASSWORD_STATE, {
            url: '/forgotpassword',
            templateUrl: 'partials/forgotPassword.html'
        });

    $urlRouterProvider.otherwise('/');
}
