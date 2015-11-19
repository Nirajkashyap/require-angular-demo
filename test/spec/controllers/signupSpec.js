/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SignupCtrl', function () {

    // load the controller's module
    beforeEach(module('requireangApp.controllers.SignupCtrl'));

    var SignupCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      SignupCtrl = $controller('SignupCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SignupCtrl.awesomeThings.length).toBe(3);
    });
  });
});
