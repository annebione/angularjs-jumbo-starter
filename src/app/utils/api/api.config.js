 'use strict';

angular
  .module('jumbo-webapp')
  .config(apiConfig);

function apiConfig(API, $httpProvider, FacebookProvider) {

  FacebookProvider.init('357257514654213');

  $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  $httpProvider.interceptors.push('AuthorizationInterceptor');

  function fullRequestInterceptor(element, operation, route, url, headers, params, httpConfig) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    
    return {
      element: element,
      headers: headers,
      params: params,
      httpConfig: httpConfig
    };
  }
}