 var socket = io(window.location.hostname + ':3000');
 // var socket = io();
      var el = document.getElementById('server-time');
      socket.on('time', function(timeString) {
        console.log('Server time: ' + timeString);
      });