function setup() {
  createCanvas(800,800);
  frameRate(2);
  colorMode(HSB,255);
  
}

function draw() {
  background(255,255,255);
  noStroke;
  
  
  for (var x = 0; x < width; x += 50) {
    for (var y = 0; y < height; y += 50) {
      
      if (random() < 0.3) {
        fill (120,0,0,100);
      }
      else {
        fill(0,120,255,50);
      }

      quad(x,y,x + 50,y,x + 50,y + 50,x,y + 50);
      quad(x,y - 25,x + 25,y - 50,x + 50,y - 25,x + 25,y);
      
    }
  }
  
 for(var x1 = 25; x1 < width; x1 += 50) {
    for(var y1 = 25; y1 < height; y1 += 50) {
      
      if (random() <0.8) {
        fill(0,0,255);
      }
      else {
        fill(0,255,255);
      }
      
      ellipse(x1,y1,5);
    
    }
  }
  
}