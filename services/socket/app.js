const express = require('express');
const redis = require('socket.io-redis');
const app = express();
const server = require('http').createServer(app);

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const io = require('socket.io').listen(server);

io.on('connection', function (socket) {
    console.log('ping-pong started');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

io.adapter(redis({host: 'redis', port: 6379}));

server.listen(3000);
