define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireangApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the requireangApp
   */
  angular.module('requireangApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
