/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/login', 'controllers/signup']/*deps*/, function (angular, MainCtrl, AboutCtrl, LoginCtrl, SignupCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name requireangApp
   * @description
   * # requireangApp
   *
   * Main module of the application.
   */
  return angular
    .module('requireangApp', ['requireangApp.controllers.MainCtrl',
'requireangApp.controllers.AboutCtrl',
'requireangApp.controllers.LoginCtrl',
'requireangApp.controllers.SignupCtrl',
/*angJSDeps*/
    'ngCookies',

    
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'signup'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
