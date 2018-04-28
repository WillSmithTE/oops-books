import * as angular from 'angular';
import { routes } from './routes';
import { initBookController } from './BookController';
import { initRootController } from './RootController';

const app = angular.module('app', ['ui.router']);
app.config(routes);
initRootController(angular);
initBookController(angular);
