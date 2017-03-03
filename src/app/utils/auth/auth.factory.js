'use strict';

angular
  .module('jumbo-webapp')
  .factory('AuthFactory', AuthFactory)

function AuthFactory($auth, md5, $window) {
	var loginOptions = {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	};

	let _factory = {
		login: user => {
			return $auth.login({
				useremail: user.useremail,
				password: md5.createHash(user.password)
			}, loginOptions);
		},
		loginfb: (token) => {
			return $auth.login({
				fb_access_token: token
			});
		},
		logout: () => {
			$window.localStorage.removeItem('user_id');
			$window.localStorage.clear();
			return $auth.logout();
		},
		isAuthenticated: () => $auth.isAuthenticated(),
		currentUser: () => $auth.getPayLoad(),
		setToken: token => $auth.setToken(token)
	};
	return _factory;
}