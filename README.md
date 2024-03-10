# workshop-1

## Conditionals
	let move = 3
	if (x > width){
	move = -3 brings it back from edge of canvas
	if (x < 0){
	move = 3 makes it move across normally again once it reaches the other side
	x = x + move
 
 ## Loops
### While Loop
	while (x < width){
	rect (x, 200, 25, 80)
	x += 50;
	} will repeat rectangle pattern within width of the canvas
### For Loop
	for (x = 0; x < width; x +=50){
	rect (x, 200, 25, 80)
	}
 
## Functions
	function makeHouse (x, y, height, colour){
	fill (colour);
	rect (x, y, 50, height);
	triangle (x, y, y + 25, y - 20, x + 50, y)
} 

## Functions & Loops
	random (0, width) means generate a random number between 0 and width
	X ++ means x + 1
	for (x = 0; x < 30; x ++){
		lollipop(random(0,width), random(0,height), random (0, 200), color(255, 0, 0));
}
	function lollipop(x, y, size, colour){
	fill (255)
	rect (x, y - size, 10, size);
	fill(colour)
	ellipseMode(CORNER)
	circle(x - 10, y - size - 30, 30);
}

## Shapes
	triangle (x, y, y + 25, y - 20, x + 50, y) switch the - to + for an upside down triangle
 
- Error fixing using chatgpt for random numbers: removed background under draw function because it was erasing the image and redrawing over it
