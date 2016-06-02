var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

io.on('connection', function(socket) {
    console.log('connected');
    socket.on('test', function(data) {
        console.log(data.data)
    });
});

var server = http.listen(PORT, function() {
    
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Listening at http://%s:%s', host, port);
    
});

