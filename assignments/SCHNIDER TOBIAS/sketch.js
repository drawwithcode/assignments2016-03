function setup() {
  createCanvas(1000,500);
  frameRate(10);
  background(0)
  
  function Point(x,y){
    this.x = x;
    this.y = y;
  }
  var n = 20
  var arrSide = [];
  // Pushing in leftSide Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(0, height/n*x))
  }
      // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width/n*x , height))
  }
      // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width, height-height/n*x))
  }
     
    // Pushing in FirstLayer Points
  for(x=0; x<n;x++){
    arrSide.push(new Point(width-width/n*x, 0))
  }

      for(i=0; i<100; i++){

        fill(random(0,100))

        var x = Math.floor(random(0,arrSide.length));
        var y = Math.floor(random(0,arrSide.length));
        var z = Math.floor(random(0,arrSide.length));
  
            beginShape(TRIANGLES);
        vertex(arrSide[x].x,arrSide[x].y);
        vertex(arrSide[y].x,arrSide[y].y);
        vertex(arrSide[z].x,arrSide[z].y);
        endShape();
        
/*      arrSide.splice(x, 1);
      arrSide.splice(y, 1);
      arrSide.splice(z, 1);*/
      }
  
  
}

function draw() { 
  

      

}