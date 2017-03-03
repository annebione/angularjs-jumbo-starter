'use strict';

angular
  .module('jumbo-webapp')
  //.service('ApiService', ApiService)
  .factory('AuthorizationInterceptor', AuthorizationInterceptor);

/*function ApiService(Restangular) {
  let headers = {
  	//
    'user_id': localStorage.getItem('user_id')
  };

  let config = (RestangularConfigurer) => {
    RestangularConfigurer.setDefaultHeaders(headers);
    return true;
  };

  return Restangular.withConfig(config);
}*/

function AuthorizationInterceptor($q, $location){
  return{
    request: (config) => {
      if (($location.$$path.indexOf('login') === -1) && ($location.$$path.indexOf('register') === -1)) {
      	//
      }
      return config || $q.when(config);
    },
    responseError: (rejection) => {
      switch (rejection.status) {
        case 401:
          localStorage.clear();
          $location.path('/login');
          break;
        case 404:
          let output = rejection.data.output;
          if (output !== undefined) {
            if (output.payload.message === 'Empresa não encontrada.') {
              localStorage.clear();
              $location.path('/login');
            }  else if (output.payload.message === 'Usuário não encontrado.') {
              localStorage.clear();
              $location.path('/login');
            }
          }
        default:
          break;
      }
      return $q.reject(rejection);
    }
  };
}
