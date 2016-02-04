import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {appDirective} from './app.directive';

angular.module('app', [
   uiRouter 

  ])
.directive('app', appDirective);