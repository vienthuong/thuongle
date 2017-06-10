 var socket = io();
      var el = document.getElementById('server-time');
      socket.on('time', function(timeString) {
        console.log('Server time: ' + timeString);
      });