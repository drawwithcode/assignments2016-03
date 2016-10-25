function setup() {
  createCanvas(800,500);
  frameRate(2);
  noStroke(0);
  colorMode(HSB);
  //background(0);
}

function draw() {

var colore = 360*random();

  for(var x=25;x<width;x+=25){
    for(var y=25;y<height;y+=25){
      
      fill(colore,50*random(),255);
      
      ellipse(x,y,random()*25);
    
    }
  }

}


