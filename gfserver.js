var express = require('express');
var app2 = express();
var server2 = app2.listen(2010);
var socket = require('socket.io');
var io = socket(server2);
let lounge = {};
io.sockets.on('connection', onNewConnections);

function onNewConnections(socket){

	 socket.on('sendToAll', allCast);


	         socket.on('disconnect', function(){

        });

	          function allCast(data){
              socket.broadcast.emit('sendToAll',data);

        }
}
