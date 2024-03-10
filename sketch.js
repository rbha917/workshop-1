function setup() {
  createCanvas(500, 450);
  let x = 0
  }

function draw() {
  background(220);
  makeHouse(50, 250, 30, color(255,0,255))
  icecream(20, 100, 30, color(0, 255, 0))
  
  for (x = 0; x < width; x +=50){
	fill (255, 0, 0)
	rect (x, 300, 25, 80)
    fill (0, 255, 255)
    square(x, 180, 30)
	}
}

function icecream(x, y, size, colour){
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);
  fill(colour);
  ellipseMode(CORNER);
  ellipse(x, y - 35, 40, 41);
}

// function lollipop(x, y, size, colour) {
//   fill(255);
//   rect(x, y - size, 10, size);
//   fill(colour);
//   ellipseMode(CORNER);
//   ellipse(x - 10, y - size - 30, 30, 30);
// }

function makeHouse (x, y, height, colour){
	fill (colour);
	rect (x, y, 50, height);
	triangle (x, y, x + 25, y - 20, x + 50, y)
} 