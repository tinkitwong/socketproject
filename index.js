var app = require('express')();
// express initializes the app to be a function handler that you can supply to a HTTP server
var http = require('http').createServer(app);

// initialize a new instance of socket.io by passing http server object
var io = require('socket.io')(http);

// define a route handler / that gets called when we hit a website home
app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
});

// listen for connectione events for incoming sockets
io.on('connection', function(socket){
      //log to console
      console.log('a user connected');
//      socket.broadcast.emit('hi');
      socket.on('chat message', function(msg){
                //console.log('message :' + msg);
                io.emit('chat message', msg);
                });
      
      });

// make the http server listen on port 3000
http.listen(3000, function(){
            console.log('listening on *:3000');
});
