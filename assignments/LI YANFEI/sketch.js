function setup() {
  createCanvas(800,800);
  colorMode(HSB,255);
  frameRate(1)
  
}

function draw() {
  
  
  for(var x1=-10;x1<800;x1+=20){
    
    for(var y2=0;y2<800;y2+=20){
      
      var x2=x1+10
      var x3=x1+20
      var x4=x1+30
  
      var y1=y2+20
      var y3=y2+20
      var y4=y2
      
       triangle(x1,y1,x2,y2,x3,y3);
      
      if(random()<0.5){
        
         stroke(255);
         fill(random()*255, random()*255, 250);
        
      } else {
         triangle(x2,y2,x3,y3,x4,y4)
        
         stroke(255);
         fill(random()*255, random()*255, 250);
        }
       
       }
      
    }
   }
  
