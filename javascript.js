//var bg;
var ellipse;
var mtv;
var hand;
var stayfresh;

let r, g, b;



function setup() {
 
//bg = loadImage('stripes.jpg');
mtv = loadImage ('mtv.png');
hand = loadImage ('hand.png');
stayfresh = loadImage ('stayfresh.png');
createCanvas(800, 700);
  r = random(255);
  g = random(255);
  b = random(255);  

    
}

function draw() {
 //deleted background currently using css
 //background(bg);
 	
//draw the circle 
strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127)
ellipse(400, 200, 300);

image(mtv, 220, 5, 400, 400);

image(hand, 100, 300, 600, 400 );



  

   
}


function mousePressed() {
  // make mouse inside the circle
  let d = dist(mouseX, mouseY, 400, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
    
}

