'use strict';

const express = require('express');

const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3001;
const INDEX = path.join(__dirname, 'index.html');

const app = express();
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
  console.log('Client connected');
  socket.on('emit_method', function(data){
  	console.log(data);
  });
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
