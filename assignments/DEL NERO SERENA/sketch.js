function setup() {
  createCanvas(800,600);
  frameRate(10);
}

function draw() {
  
  var incremento=40;
  var mezzo=20;
  
  for (var x=0; x<width+10; x+=incremento) {
    for (var y=0; y<height+10; y+=incremento) {
      
      if (random() <0.5) {
        fill (0,0,0);
      }
      else {
        fill(255,255,255);
      }
      
      strokeWeight(1);
      quad(x,y,x+incremento,y,x+incremento,y+incremento,x,y+incremento);
      quad(x,y-mezzo,x+mezzo,y-(mezzo*2),x+(mezzo*2),y-mezzo,x+mezzo,y);
      
    }
  }
  
 for(var elx=20; elx<width; elx += 40) {
    for(var ely=20; ely<height; ely+= 40) {
      
      if (random() <0.5) {
        fill(0,0,255);
      }
      else {
        fill(227,11,92);
      }
      
      ellipse(elx,ely,15);
    
    }
  }
  
}