# workshop-1

### Link to sketch: https://rbha917.github.io/workshop-1/

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
