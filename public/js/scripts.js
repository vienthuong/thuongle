 var socket = io('http://thuongle.herokuapp.com:6002');
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: data });
  });
