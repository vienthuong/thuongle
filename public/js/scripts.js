 var socket = io.connect(window.location.hostname + ':3000');
 console.log(window.location.hostname);
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: data });
  });
