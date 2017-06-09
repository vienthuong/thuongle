 var socket = io('https://thuongle.herokuapp.com:6002');
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: data });
  });
