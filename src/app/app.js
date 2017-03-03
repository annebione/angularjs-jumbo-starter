'use strict';

angular.module('jumbo-webapp', [
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'ui.router',
  'ui.utils.masks',
  'angular-md5',
  'ngResource',
  'angulartics',
  'facebook',
  'anim-in-out',
  'satellizer',
  'angularUtils.directives.dirPagination'
  //'oc.lazyLoad' 
 ]);

angular.module('jumbo-webapp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

 //   angular.module('jumbo-webapp').config( [ 
 //       '$ocLazyLoadProvider', function ( $ocLazyLoadProvider) {
 //           $ocLazyLoadProvider.config( {
 //               debug : true
 //           } );
 //       }
 //   ] );