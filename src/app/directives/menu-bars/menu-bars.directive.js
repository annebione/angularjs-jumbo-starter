'use strict';

angular
  .module('jumbo-webapp')
  .directive('menuBars', menuBars)

function menuBars() {
  	return {
  		restrict: 'E',
  		scope: {},
  		replace: true,
  		templateUrl: '../templates/menu-bars.html'
  	
  }
};