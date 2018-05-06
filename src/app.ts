import * as angular from 'angular';
import { routes } from './routes';
import { initBookController } from './controllers/BookController';
import { initRootController } from './controllers/RootController';

const app = angular.module('app', ['ui.router']);
app.config(routes);
initRootController(angular);
initBookController(angular);
