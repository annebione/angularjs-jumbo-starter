'use strict';

let express = require('express');
let http = require('http');
let path = require('path');
let config = require('../config.js');
let pages = require('./pages.controller.js')

let app = express();
let server = http.createServer(app);

app.use(require('prerender-node').set('prerenderToken', '42848294829489ujkjdkcm020kml')); 
app.set('env', process.env.NODE_ENV || 'production');
app.set('port', process.env.PORT || config.server.port);
app.use(express.static(path.join(__dirname, '../dist'), {
    etag: false,
    maxAge: 1
}));

app
  .route('*')
  .get(pages.admin);

app
  .route('/auth/facebook')
  .post(function(res){
    res.send();
  });


server.listen(app.get('port'), function () {
  if (app.get('env') !== 'test') {
    console.log('> localhost:' + app.get('port'));
  }
});
