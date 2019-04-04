import * as angular from 'angular';
import { routes } from './routes';
import { initBookController } from './controllers/BookController';
import { initRootController } from './controllers/RootController';
import { initAuthController } from './controllers/AuthController';
import { initAuthService } from './services/AuthService';
import { initSellController } from './controllers/SellController';

const app = angular.module('app', ['ui.router']);
app.config(routes);
initRootController(angular);
initBookController(angular);
initAuthController(angular);
initAuthService(angular);
initSellController(angular);
