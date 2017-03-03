'use strict';

angular
  .module('jumbo-webapp')
  .factory('AccountFactory', AccountFactory);


function AccountFactory($resource, $window, API, AccountService, md5, $q) {

  let _factory = {};

  _factory.create = (user) => {
     var password = md5.createHash(user.password);
     return AccountService.create.save({
       fname: user.fname,
       lname: user.lname,
       password: password,
       email: user.email
     }).$promise;
  };

  _factory.get = (id) => AccountService.one.get(id).$promise;

  return _factory;

}