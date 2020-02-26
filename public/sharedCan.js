var socket;

function setup() {

  createCanvas(710, 400);
  background(102);
  socket = io.connect('http://localhost:3000');
  
}




function mouseDragged () {            

      noStroke ();
  fill (255, 0, 100);
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
