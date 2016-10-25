function setup() {
  createCanvas(800,400)
  colorMode(RGB)
  background(255)
  frameRate(2)
   var x;
   var y;
   var d;
   
  
 
}

function draw() {



noStroke()





//1  
for(x=0; x<850;x+=200){
for(y=0;y<100;y+=200){
for(d=150;d>20;d-=30){
fill(255)
if(d==60 || d==120){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}



//2
for(x=100; x<850;x+=200){
for(y=50;y<100;y+=200){
for(d=150;d>20;d-=30){
fill(255)
if(d==30 || d==90 || d==150){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//3
for( x=0; x<850;x+=200){
for( y=100;y<200;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==60 || d==120){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//4
for( x=100; x<850;x+=200){
for(y=150;y<200;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==30 || d==90 || d==150){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//5
for(x=0; x<850;x+=200){
for( y=200;y<300;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==60 || d==120){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//6
for( x=100; x<850;x+=200){
for( y=250;y<300;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==30 || d==90 || d==150){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//7
for( x=0; x<850;x+=200){
for( y=300;y<400;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==60 || d==120){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//8
for( x=100; x<850;x+=200){
for( y=350;y<400;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==30 || d==90 || d==150){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}

//9
for( x=0; x<850;x+=200){
for( y=400;y<450;y+=200){
for( d=150;d>20;d-=30){
fill(255)
if(d==60 || d==120){
  fill(150,150,random()*255)
}
ellipse(x,y,d)
}}}


}