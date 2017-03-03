'use strict';

angular
  .module('jumbo-webapp')
  .config(loginConfig);

function loginConfig($stateProvider) {
  $stateProvider
    .state('jumbo', {
      url: '/',
      views: {
        '': {
          templateUrl: './templates/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
      //  resolve: {
      //    lazyLoad: function($ocLazyLoad) {
      //       return $ocLazyLoad.load('lazy.directive.js');
     //   }
    })
    .state('jumbo.logout', {
      url: '/logout',
      redirectTo: 'login'
    });
}