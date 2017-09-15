// Socket.io server implementation
// to be used with index.html
// This example will be of an http and socket.io server combined. 

var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

// The function does not even examine the URL, regardless of the URL it gives the index.html page
var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

// The http.createServer function receives a handler function (named callback). 
var app = http.createServer(handler);
// We are storing the created server in an app variable and are passing it to socketio.listen()
var io = socketio.listen(app);

// whenever we receivea “connection” event, which means that the browser connects to the server
io.sockets.on('connection', function (socket) {
  //  set an interval for every two seconds
  setInterval(function() {
    // capture the current timestamp
    var timestamp = Date.now();
    // log it
    console.log('Emitted: ' + timestamp);
    // emit it to the browser (see index.html, there it is written in a textbox)
    socket.emit('timer', timestamp);
  }, 2000);
  // listen for the 'submit' event from the browser (see index.html, there we emit submit when clicking on a button)
  socket.on('submit', function(data) {
    console.log('Submitted: ' + data);
  });
});

// use process.env.PORT and process.env.IP for Cloud9
// or replace with your port and (optionally) IP as necessary
app.listen(process.env.PORT, process.env.IP);

console.log('Server running!');