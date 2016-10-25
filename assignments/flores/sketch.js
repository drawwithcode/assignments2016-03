 var colorList = ['#0F4DA8','#976BD6','#510FAD','#320571'];
function setup() {
 createCanvas(500,500);
 background(200)
  frameRate(2)
  
}

function draw() {
 
 for(var x=0 ; x < width ; x+=50){
 for(var y=0 ; y < height ; y+=50){
 noStroke()
 var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));

  quad(x,y,x+50,y+50,x+50,y,x,y+50);
   noStroke();
   var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));
   
   quad(x+25,y+10,x+10,y+25,x+25,y+40,x+40,y+25)
   noStroke();
   fill(color(colorHex));
     
  
 }
 }
   
}