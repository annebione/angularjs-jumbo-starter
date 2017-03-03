'use strict';

let host = document.location.hostname;

const API = (host === 'jumbo-stag.com.br' || host === 'jumbo-stag.herokuapp.com' ?
 'http://jumbo.com.br/dashboard/api/api.php' :
 (host === 'jumbo.com.br' || host === 'www.jumbo.com.br' || host === 'jumbo.com.br' || host === 'www.empresas.jumbo.com.br' ?
 'http://jumbo.com.br/dashboard/api/api.php' :
 'http://jumbo.com.br/dashboard/api/api.php'));

angular
  .module('jumbo-webapp')
  .constant('API', API);
