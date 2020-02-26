var express = require ('express');       // import all the Express framwok into one var
var app = express();   

var socket = require ('socket.io');       // import all socket framwork

var server = app.listen(3000);          // make the server run on port 3000
app.use (express.static('public'));    // host static files on the public directory (html, javascript code)

var io = socket(server);                 // I start a socket and I give it the server itself as an arrgument

io.sockets.on ('connection', newConnection);        // setting up a connection event function


function newConnection(socket) {                   // create a new socket everytime there is a connection

    console.log ('new connetion: ' + socket.id);     // print the id of socket cloent
               // when receive mesege called 'mouse', trigger function called MouseMsg
              // just printing data
    socket.on('mouse', mouseMsg)          ;

    
}

function mouseMsg (data) {

    console.log(data);
}