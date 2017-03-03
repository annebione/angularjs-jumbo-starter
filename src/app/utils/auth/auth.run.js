'use strict';

angular
  .module('jumbo-webapp')
  .run(authRun);

function authRun ($rootScope, AuthFactory, $state) {
	$rootScope
		.$on('$stateChangeStart', function(event, toState) {
			if (toState.name === 'login') {
				return AuthFactory.logout();
			}

		let stateRequireLogin = /^admin/.test(toState.name);
		let isAuthenticated = AuthFactory.isAuthenticated();

			if (stateRequireLogin && !isAuthenticated) {
				event.preventDefault();
				$state.go('login');
			}
		});
}
