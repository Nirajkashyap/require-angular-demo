define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireangApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the requireangApp
   */
  angular.module('requireangApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
