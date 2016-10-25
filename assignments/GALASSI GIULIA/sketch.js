var x = 0;

function setup() {
  createCanvas(600, 600)
  frameRate(10);
  colorMode(HSB);
}

function draw() {

  background(10);
  noStroke();
  if (x < 75) {

    var y = x + 1;
    x = y;

  } else {

    x = 0;

  }
  
  
  fill(y/60*255, 95, 95, 0.2);


  for (var yc = 90; yc < 500; yc += 56) {
    for (var xc = 100; xc < 500; xc += 30) {
      
      ellipse(xc, yc, y);
      ellipse(xc + 15, yc + 28, y);
    }
  }

}