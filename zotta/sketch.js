function setup() {
  createCanvas(800,500);
  frameRate(1);
}

function draw() {

  var shift=20;
  
  noStroke();
  
  for(var x=0;x<(width+shift);x+=shift){
    for(var y=0;y<(height+shift);y+=shift){
  
      if(random()<0.1){
        fill(255, 225, 0);
      } else if(random()<0.2) {
        fill(255, 55, 0);
      } else if(random()<0.3) {
        fill(0, 25, 255);
      } else if(random()<0.4) {
        fill(0, 255, 135);
      } else if(random()<0.5) {
        fill(255, 157, 0);
      } else if(random()<0.6) {
        fill(0, 21, 255);
      } else if(random()<0.7) {
        fill(0, 169, 255);
      } else if(random()<0.8) {
        fill(0, 255, 169);
      } else if(random()<0.9) {
        fill(191, 255, 0);
      } else {
        fill(255, 29, 0);
      }
      
      beginShape();
      vertex(x,y);
      vertex(x+shift,y-shift);
      vertex(x+shift,y);
      vertex(x,y+shift);
      endShape();
    }
  }
}