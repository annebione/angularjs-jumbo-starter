'use strict';

var express = require('express');

var app = module.exports = express();

app.use(function(){ 
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers 
  // We set the token only if we're using the Prerender.io service 
  app.use(require('prerender-node').set('prerenderToken', '42848294829489ujkjdkcm020kml')); 
  app.use(express.static("public")); app.use(app.router); 
});

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){ 
  res.sendfile('../dist/index.html'); 
});

app.listen(8081); 
console.log("Go!");

/*
'use strict';

let express = require('express');
let http = require('http');
let path = require('path');
let config = require('../config.js');
let pages = require('./pages.controller.js')

let app = express();
let server = http.createServer(app);

app.set('env', process.env.NODE_ENV || 'production');
app.set('port', process.env.PORT || config.server.port);
app.use(express.static(path.join(__dirname, '../public'), {
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
*/