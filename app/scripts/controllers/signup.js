define(['angular', 'bootstrap'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name requireangApp.controller:SignupCtrl
   * @description
   * # SignupCtrl
   * Controller of the requireangApp
   */
  angular.module('requireangApp.controllers.SignupCtrl', [])
    .controller('SignupCtrl', function () {
      console.log($('#myModal').show())
      $('#myModal').modal("show")


    });
});
