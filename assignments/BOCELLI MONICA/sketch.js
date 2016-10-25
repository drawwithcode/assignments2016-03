var colorList = ['#e86584',
    '#3c5979',
    '#018cb7',
    '#fae093'
];


function setup() {

    createCanvas(600, 800);
    frameRate(3);
}

function draw() {
for(var x = 0; x < 540; x += 60) {
    for(var y = 0; y < 770; y += 30) {
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
     fill(color(colorHex));
     noStroke();
      rect(x, y, 60,30);
    }
  }

}