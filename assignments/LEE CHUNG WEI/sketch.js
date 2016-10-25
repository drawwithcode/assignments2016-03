var colorList = ['#dd637e', '#f1d990', '#f3a052', '#6e9fd5', '#0c84ac', '#9a78a3', '#ba8bbc', '#fbe3e4', '#6daf70', '#2758a7']

function setup() {
  createCanvas(400, 400)
  frameRate(5)
}

function draw() {
  for (var x = 0; x < 400; x += 50) {
    for (var y = 0; y < 450; y += 50) {
      noStroke()
      var index = floor(random() * colorList.length)
      var colorHex = colorList[index]
      fill(color(colorHex))
      quad(x, y, x + 50, y - 50, x + 50, y, x, y + 50)
    }
  }
}