'use strict';

const express = require('express');

const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3001;
const INDEX = path.join(__dirname, 'index.html');
var history = require('connect-history-api-fallback');

const app = express();
app.use(history());
 app.use('/',express.static(__dirname));
 app.get('/',function(req,res){ res.sendFile(INDEX); })
 var server= app.listen(PORT,function(){ console.log("Listening on port: "+ PORT); })
// const server = express()
//   .use((req, res) => res.sendFile(INDEX) )
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
// server.use(express.static('css'));
// server.use(express.static('js'));
// server.use(express.static('dist'));
// server.use(express.static(path.join(__dirname, '/css')));

const io = socketIO(server);

io.on('connection', (socket) => {

  socket.on('joinRoom', function (joinRoom) {
    socket.join('chatRoom'); // We are using room of socket io
    console.log('a client has joined chat Room ');
  });

  socket.on('message_sent', function(data){
      socket.to('chatRoom').emit('message_received', data);
      console.log(data);
  });

  socket.on('leave', function(leaveRoom){
    console.log('a client has left room ' + leaveRoom);
    socket.leave(leaveRoom);
  });

  socket.on('disconnect', function(socket){
    console.log('a client has disconnected')
  });
});

