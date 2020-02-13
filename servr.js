var express = require('express');
var app = express();


//create folder named public other content like pictures but they are accessible by just typing the name in the url. Just put public if it in the root directory
app.use(express.static('public'));

// use this for specific path to your directory
app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', function(req,res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/contacts.html', function(req,res){
  res.sendFile(__dirname + '/contacts.html');
});

app.get('/mlgroupfinder.html', function(req,res){
  res.sendFile(__dirname + '/mlgroupfinder.html');
});

app.get('/groupfinders.html', function(req,res){
  res.sendFile(__dirname + '/groupfinders.html');
});

app.get('/projects.html', function(req,res){
  res.sendFile(__dirname + '/projects.html');
});


 
var server= app.listen(8080, function(){
    var port = server.address().port;
    console.log('Server started at http://localhost:%s', port);
});

var app2 = express();
var server2 = app2.listen(2010);
var socket = require('socket.io');
var io = socket(server2);
io.sockets.on('connection', onNewConnections);

function onNewConnections(socket){
	socket.on('sendToAll', allCast);

	function allCast(data){
	   socket.broadcast.emit('sendToAll',data);
	}
}