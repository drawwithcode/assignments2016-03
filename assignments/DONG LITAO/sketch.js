function setup() {
  createCanvas(400, 400);
  frameRate(2)
  colorMode(HSB,255)
}

function draw() {
  background(255)
  noStroke()
  
    for(var x = 0; x< 400; x += 25) {
      var l1 = random() * height
      var l2 = height-10-l1
      if (random()<0.5) {
         fill(150,random()*255,255)
         rect(x,0,15,l1,10)
         fill(40,random()*255,255)
         ellipse(x+7.5,10+l1,15)
         fill(240,random()*255,255)
         rect(x,20+l1,15,l2,10)
         
      }else {
        fill(240,random()*255,255)
        rect(x,0,15,l1,10)
        fill(40,random()*255,255)
        ellipse(x+7.5,10+l1,15)
        fill(150,random()*255,255)
        rect(x,20+l1,15,l2,10)
        
      }
    }
    
}