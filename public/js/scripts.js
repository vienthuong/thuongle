 var socket = io('http://localhost:3000');
      var el = document.getElementById('server-time');
      socket.on('time', function(timeString) {
        console.log('Server time: ' + timeString);
      });