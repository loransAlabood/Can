var socket;

function setup() {

  createCanvas(710, 400);
  background(102);
  socket = io.connect('http://localhost:3000');
  socket.on ('mouse', newDrawing);
  
  r = random(255);
g = random(255);
b = random(255);
  
}

function newDrawing (data) {

  noStroke ();
  fill (200, 30, 150);
  ellipse (data.x, data.y, 36,36);

}


function mouseDragged () {            

  noStroke ();
  fill (r, g, b);
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








//socket.on('mouse', newDrawing);


//  r = random(255);
//g = random(255);
// b = random(255);

//function newDrawing (data){

  //noStroke ();
  //fill (r, g, b);
  //ellipse (data.x, data.y, 36,36);

//}