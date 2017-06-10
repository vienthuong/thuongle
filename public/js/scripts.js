 var socket = io.connect(window.location.hostname +':3000');
      var el = document.getElementById('server-time');
      socket.on('time', function(timeString) {
        console.log('Server time: ' + timeString);
      });