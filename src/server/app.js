var express = require('express');

var app = module.exports = express();

app.configure(function(){ 
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers 
  // We set the token only if we're using the Prerender.io service 
  app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE')); 
  app.use(express.static("public")); app.use(app.router); 
});

app
  .route('/auth/facebook')
  .post(function(res){
    res.send();
  });

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){ 
  res.sendfile('../../dist/templates/index.html'); 
});

app.listen(8081); 
console.log("Go!");