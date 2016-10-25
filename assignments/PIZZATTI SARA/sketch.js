function setup() {
  createCanvas(800, 800);
  frameRate(1);


}

function draw() {
  for (x = 0; x <= width; x += 40) {
    for (y = 0; y < height; y += 40) {

      var r = random() * 255;
      var g = random() * 255;

      noStroke();
      fill(r, g, 255);

      beginShape();
      vertex(x, y);
      vertex(x + 40, y);
      vertex(x + 20, y + 40);
      vertex(x - 20, y + 40);
      endShape();
    }
  }


  for (x = 5; x <= width; x += 40) {
    for (y = 10; y < height; y += 40) {

      var r = random() * 255;
      var g = random() * 255;

      noFill();
      strokeWeight(2);
      stroke(r, g, 255);

      beginShape();
      vertex(x, y);
      vertex(x + 20, y);
      vertex(x + 10, y + 20);
      vertex(x - 10, y + 20);
      endShape(CLOSE);
    }
  }
}