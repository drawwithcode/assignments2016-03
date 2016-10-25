var c = 0
var s = 0


function setup() {
  createCanvas(800, 500)
  rectMode(CENTER)
}

function draw() {

  for (x = 10; x < width; x += 30) {
    for (y = 10; y < height; y += 30) {

      tile()
    }

    c++
    if (c > 150) {
      noLoop();
    }
  }
}

function tile() {
  noFill()
  stroke(random(255), random(255), random(255))
  if (random() < 0.5) {
    ellipse(x - 5, y, random(10))
  }
  if (random() < 0.5) {
    ellipse(x + 5, y, random(10))
  }
  if (random() < 0.5) {
    ellipse(x, y + 5, random(10))
  }
  if (random() < 0.5) {
    ellipse(x, y - 5, random(10))
  }
  if (c < 20 && random() < 0.5) {
    line(x - 10, y - 10, x + 10, y + 10)
      /*if (random()<0.5){
        t=0}
        else{
          t=1
        }
        if (t=1 && random()<0.5){
          ellipse(x+10,y+10,5)
        }*/
  }
}