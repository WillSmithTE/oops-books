import * as angular from 'angular';
import { routes } from './routes';
import { HomeController, initHomeController } from './HomeController';
import { initBookController } from './BookController';

const app = angular.module('app', ['ui.router']);
app.config(routes);
initHomeController(angular);
initBookController(angular);
