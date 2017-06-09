 var socket = io.connect();
 console.log(window.location.hostname);
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: data });
  });
