'use strict';

let path = require('path');

module.exports = {
  admin: function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/templates/index.html'), {
        maxAge: 1
    });
  }
};