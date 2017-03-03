'use strict';

angular
  .module('jumbo-webapp')
  .config(authConfig);

function authConfig($authProvider, API) {
  $authProvider.loginUrl = `${API}?action=Login`;
  $authProvider.authHeader = 'token';
  $authProvider.authToken = '';
  $authProvider.storageType = 'localStorage';
}
