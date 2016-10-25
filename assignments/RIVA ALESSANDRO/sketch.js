function setup() {
  createCanvas(800,500);
  colorMode(HSB);
  frameRate(8);
  
}

function draw() {
  
  c1 = color('#875f9a');
  c2 = color('#db5A6b');
  c3 = color('#7a942e');
  c4 = color('#48929b');
  c5 = color('#ffa631');
  c6 = color('#c91f37');
  c7 = color('#ffb61e');
  

 /* 
 var temp1 = frame(10);
 var temp2 = frameCount(20);
 
 var currentTime = frameCount();
  
 if (currentTime() >= temp2) {background('#875f9a');}
 else if (currentTime <= temp1) {background('#ffb61e');}
 */
 
 noFill();
 
 if(random()<0.5) { background('#875f9a');}        //c1
 else if(random()>0.5) { background('#ffb61e');}   //c7
 else if(random()>0.25) { background('#48929b');}  //c4
 else if(random()<0.25) { background('#7a942e');}  //c3
 else if(random()<0.75) { background('#ffa631');}  //c5
 else if(random()>0.75) { background('#db5A6b');}  //c2
 else if(random()>=0.33) { background('#c91f37');}  //c6
 
 
 function poligono(x, y, raggio, npunti) {
  var angle = TWO_PI / npunti;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * raggio;
    var sy = y + sin(a) * raggio;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
 
 //quad(x1,y1,x2,y2,x3,y3,x4,y4);

 var q = 40;
 
   for(var x=0; x<900; x+=40) {
    for(var y=0; y<900; y+=35) {
 
 
 
 strokeWeight(1);
 poligono(x,y,20,6);
 
 if(random()<=0.25) {fill(c1);}
 
 else if(random()<=0.33) {fill(c2);}
   
 else if(random() <=0.5) {fill(c3);}
   
 else if(random()<=0.75){fill(c4);}
 
 else if(random()<=1){fill(c5);} 
  
 else if(random()<=1.33)fill(c6);} 
 
 
}


}