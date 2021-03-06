// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>res.send('Hesllo'))

// const port = process.env.PORT || 8000;

// app.listen(port,() => console.log(`Server running on port: ${port}`))

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: '*:*'});;
const cors = require('cors');

// we will use port 8000 for our app
server.listen(8000, () => console.log('connected to port 8000!'));

io.on('connection',function(socket){
    console.log('User Connected')
    // socket.on('chat message', function(msg){
    //     console.log('message: ' + msg);
    // });
    socket.on('chat message', function(msg){
        console.log(msg)
        io.emit('chat message', msg);
    });
})