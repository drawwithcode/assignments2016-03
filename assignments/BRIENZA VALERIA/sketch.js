function setup() {
  createCanvas(800, 600);

  var colorList = ['#f6a263',
    '#f9df99',
    '#ed6686',
    '#6faadd',
    '#268eb4',
    '#3c5775',
    '#a47ea7',
    '#bf8bbd',
    '#64b376',
    '#3a67af',
    '#fce2e6'
  ];
  var larghezza = 30;
  var altezza = 30;

  for (x = 0; x <= width; x += larghezza) {
    for (y = 0; y <= height; y += altezza) {
      noStroke();
      //colore delle aree 
      var colore = random();
      console.log(colore)
      if (colore < 0.1) {
        fill(color(colorList[0]));
      } else if (colore < 0.2) {
        fill(color(colorList[1]));
      } else if (colore < 0.3) {
        fill(color(colorList[2]));
      } else if (colore < 0.4) {
        fill(color(colorList[3]));
      } else if (colore < 0.5) {
        fill(color(colorList[4]));
      } else if (colore < 0.6) {
        fill(color(colorList[5]));
      } else if (colore < 0.7) {
        fill(color(colorList[6]));
      } else if (colore < 0.8) {
        fill(color(colorList[7]));
      } else if (colore < 0.9) {
        fill(color(colorList[8]));
      } else if (colore < 1) {
        fill(color(colorList[9]));
      } else if (colore == 1) {
        fill(color(colorList[10]));
      }


      quad(x, y, x, y + altezza, x + larghezza, y, x + larghezza, y - altezza)


    }
  }
}