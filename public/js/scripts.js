 var socket = io(window.location.hostname + ':6002');
 console.log(window.location.hostname);
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: data });
  });
