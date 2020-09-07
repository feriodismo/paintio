const express = require('express');
const app = require('express')();
const socketIO = require('socket.io');
var path = require('path');
const PORT = process.env.PORT || 3000;
var RoomName = ''
const server = express()
const use = server.use(express.static('public'))
const listener = use.listen(PORT, () => console.log(`Listening on ${ PORT }`)); 
Device = 'index'
Guest = ''


use.get('/:room', function(req, res) {
  RoomName = req.params.room;
  // Device = req.params.device;
  // Guest = false  
  // if(Device === 'phone'){
  	// res.sendFile(__dirname + '/public/phone.html');
  // }
  // else{
  	res.sendFile(__dirname + '/public/board.html');
  // }
});


const io = socketIO(listener);

io.on('connection', newConnection);

function newConnection(socket){
	socket.join(RoomName);
	info = {
		// device: Device,
		guest: Guest,
		room: RoomName
	}
	socket.emit('room', RoomName);
	console.log('some one connected to room: '+RoomName);
	socket.on('mouse', function(data){
		socket.to(data.room).emit('mouse', data);
	})
	socket.on('erase', function(data){
		socket.to(data.room).emit('erase', data);
	})
	socket.on('dsize', function(data){
		console.log(data);
	})
}