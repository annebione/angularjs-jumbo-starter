'use strict';

let config = {
  development: {
    server: {
      port: 4000,
      proxy: 5000
    }
  },
  staging: { //Adiciona configuração para ambiente de staging.
    server: {
      port: 5000,
      proxy: 6000
    }
  },
  production: {
    server: {
      port: 8080,
      proxy: 5000
    }
  },
  test: {
    server: {
      port: 3005,
      proxy: 5005
    }
  }
};

let env = process.env.NODE_ENV || 'production';

module.exports = config[env];