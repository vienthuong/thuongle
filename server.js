'use strict';

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

    server.listen(3000);

io.sockets.on('connection', function(socket) {
  console.log('Client connected');
  setInterval(() => io.emit('time', new Date().toTimeString()), 10000);
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);