'use strict';


angular.module('jumbo-webapp').controller('LoginController', LoginController)

  LoginController.$inject = ['$rootScope', '$scope', '$state', '$window', '$mdDialog', 'AuthFactory', 'Facebook'];

  function LoginController($rootScope, $scope, $state, $window, $mdDialog, AuthFactory, Facebook) {
    localStorage.removeItem('fb');
    localStorage.removeItem('fb2');
    localStorage.clear();
    var vm = this;
    this.error = 'Usuário ou senha inválidos.'
    this.userNotFound = false;
    this.user = {};
    this.newUser = false;

    let errorHandler = response => {
      this.unauthorized = response.status === 401 ||
        response.status === 400 ||
        response.status === 404;
    };

    this.auth = ()=> {
      var copyUser = angular.copy(this.user);
      this.unauthorized = false;
      console.log(this.user);
      AuthFactory
        .login(this.user)
        .then((response) => {
        	console.log(response);
          if (response.data.result == 0) {
          	this.userNotFound = true;
          	$scope.$apply();
            $state.go('jumbo.register');
            return;
          } else {
            TokenFactory.set(response);
            $timeout(() => {
              redirect();
            },200);
          }
        })
        .catch(errorHandler);
    };

    this.facebook = () => {
      //var copyUser = angular.copy(this.user);
      Facebook.login(function(response) {
         AuthFactory
          .loginfb(response.authResponse.accessToken)
          .then((response2) => {
            if (response2.data.data.user.cpf === undefined) {
              $rootScope.stepUser = undefined;
              $rootScope.user = response2.data.data.user;
              $rootScope.user.password = response2.data.data.user.fb_access_token;
              localStorage.setItem('fb', JSON.stringify(response));
              $state.go('jumbo.register');
              return;
            } else {
              TokenFactory.set(response2);
              $timeout(() => {
                redirect();
              },200);
            }
          })
          .catch(() => {
            Facebook.api('/me', function(response2) {
              localStorage.setItem('fb', JSON.stringify(response));
              localStorage.setItem('fb2', JSON.stringify(response2));
              $state.go('jumbo.register');
            });
          });
      });
    }

    $rootScope.$on(':signUpComplete', function(data) {
      vm.newUser = true;
    });

    function redirect() {
      $state.go('jumbo.home');
    }


  };