//part one
var x1 = parseInt(prompt("Enter the coordinate x1:"));
check(x1);
var y1 = parseInt(prompt("Enter the coordinate y1:"));
check(y1);
var x2 = parseInt(prompt("Enter the coordinate x2:"));
check(x2);
var y2 = parseInt(prompt("Enter the coordinate y2:"));
check(y2);
var x3 = parseInt(prompt("Enter the coordinate x3:"));
check(x3);
var y3 = parseInt(prompt("Enter the coordinate y3:"));
check(y3);
var x4 = parseInt(prompt("Enter the coordinate x4:"));
check(x4);
var y4 = parseInt(prompt("Enter the coordinate y4:"));
check(y4);

if (isRectangle(x1, y1, x2, y2, x3, y3, x4, y4)) {
	alert("This is a rectangle!");
	//part two
	var x = parseInt(prompt("Enter X of the point:"));
	check(x);
	var y = parseInt(prompt("Enter Y of the point:"));
	check(y);
	//we'll solve it through projections
	if (inRectangle(x,y)) {
		alert("The point belongs to the rectangle");
	}
	else {
		alert("The point does not belong to the rectangle");
	}
}
else {
	alert("This is not a rectangle.");
	//and no need to go to part two
}

//FUNCTIONS
//input check
function check(coord) {
	while (isNaN(coord)) {
		coord = parseInt(prompt("Wrong input, try again:"));
	}
}
//function to check whether 4 points make a rectangle
//we use Pifagor theorem
function isRectangle(x1, y1, x2, y2, x3, y3, x4, y4) {
	var d2, d3, d4;
	d2 = Math.pow(x2-x1,2) + Math.pow(y2-y1,2);
	d3 = Math.pow(x3-x1,2) + Math.pow(y3-y1,2);
	d4 = Math.pow(x4-x1,2) + Math.pow(y4-y1,2);
	if (d3 != 0 && d3 == d2+d4) {
		return true;
	}
	else
		return false;
}

//whether the point belongds to the rectangle
function inRectangle(x,y) {
	//find the two orthogonal vectors' coordinates of the rectangle
	var ABx = x2-x1;
	var ABy = y2-y1;
	var BCx = x3-x2;
	var BCy = y3-y2;
	//find the dot products of these vectors with themselves
	var dotAB = ABx*ABx + ABy*ABy;
	var dotBC = BCx*BCx + BCy*BCy;
	//assume that the point in question is M, let's find AM and BM vectors' coordinates
	var AMx = x - x1;
	var AMy = y - y1;
	var BMx = x - x2;
	var BMy = y - y2;
	//let's find dot products dot(AB,AM) and dot(BC,BM)
	var dotABAM = ABx*AMx + ABy*AMy;
	var dotBCBM = BCx*BMx + BCy*BMy;
	//the point belongs to the rectangle if this is true
	if ((0 <= dotABAM && dotABAM <= dotAB) && (0 <= dotBCBM && dotBCBM <= dotBC)) {
		return true;
	}
	else {
		return false;
	}
}