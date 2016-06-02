var socket = require('socket.io-client').connect('http://localhost:3000');

socket.on('connect', function() {
    console.log('socket client connected!');
});

socket.emit('test', {data: 'message'});
