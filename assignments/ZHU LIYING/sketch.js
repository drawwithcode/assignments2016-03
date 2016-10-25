function setup() {
  createCanvas(400, 400);
  frameRate(1)
}

function draw() {
  for(var x = 0; x < 400; x+=50)
  {
    for(var y = 0; y < 450; y+=40)
    {
      noStroke();
      var a = random ();
      if(a < 0.1)
      {
        fill(240,128,128);
      } 
      else if(a >= 0.1 && a < 0.2)
      {
        fill(255,182,193);
      }
      else if(a >= 0.2 && a < 0.3 )
      {
        fill(219,112,147);
      }
      else if(a >= 0.3 && a < 0.4)
      {
        fill(255,127,80);
      }
      else if(a >= 0.4 && a < 0.5)
      {
        fill(255,250,205);
      }
      else if(a >= 0.5 && a < 0.6)
      {
        fill(216,191,216)
      }
      else if(a >= 0.6 && a < 0.7)
      {
        fill(135,206,235)
      }
      else if(a >= 0.7 && a < 0.8 )
      {
        fill(176,224,230)
      }
      else if(a >= 0.8 && a < 0.9)
      {
        fill(102,205,170)
      }
      else
      {
        fill(30,144,255)
      }
      quad(x, y,x+50,y-40,x+50,y,x,y+40);
    }
  }
}
