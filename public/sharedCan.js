var socket;

function setup() {

  createCanvas(710, 400);
  background(102);
  socket = io.connect('http://localhost:3000');
  socket.on ('mouse', newDrawing);

  
}

function newDrawing (data) {

  noStroke ();
  fill (200, 30, 150);
  ellipse (data.x, data.y, 36,36);

}


function mouseDragged () {            
  

  noStroke ();
  fill (10, 30, 200);
  ellipse (mouseX, mouseY, 36,36);
  

  console.log ('Sending: ', mouseX + ',', mouseY );

  var data = {
    x: mouseX,
    y: mouseY
  }
    socket.emit ('mouse', data );

}






function draw() {  
  
}







