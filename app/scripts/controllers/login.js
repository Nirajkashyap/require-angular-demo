define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireangApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the requireangApp
   */
  angular.module('requireangApp.controllers.LoginCtrl', [])
    .controller('LoginCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
