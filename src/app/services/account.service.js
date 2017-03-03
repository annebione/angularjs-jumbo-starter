/* globals angular */
'use strict';

angular
  .module('jumbo-webapp')
  .factory('AccountService', AccountService);


function AccountService($resource, $window, API) {

  const headers = {
    'Content-type':'application/x-www-form-urlencoded'
   // 'Content-type':'application/json'
  };

  return {
    create: $resource(`${API}?action=Register&fname=:fname&lname=:lname&password=:password&email=:email&deviceid=0&devicetype=web`, 
      {
        fname: '@fname',
        lname: '@lname',
        email: '@email',
        password: '@password'
      }, {
      save: {
        method: 'POST',
        headers: headers
      }
    }),
    remove: $resource(`${API}?action=Register`, {}, {
      remove: {
        method: 'DELETE',
        headers: headers
      }
    }),
    update: $resource(`${API}?action=Register&update=true`, {}, {
      save: {
        method: 'PUT',
        headers: headers
      }
    }),
    one: $resource(`${API}?action=Register&update=true`, {}, {
      get: {
        method: 'GET',
        headers: headers
      }
    })
  }
}
