var app = require('express')();
// express initializes the app to be a function handler that you can supply to a HTTP server
var http = require('http').createServer(app);

// define a route handler / that gets called when we hit a website home
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

// make the http server listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
