var stories = parseInt(prompt("Enter the number of stories:"));
while (!okInput(stories)) {
	stories = parseInt(prompt("Incorrect input, try again:"));
}
var porches = parseInt(prompt("Enter the number of porches:"));
while (!okInput(porches)) {
	porches = parseInt(prompt("Incorrect input, try again:"));
}
var flatsPerStory = parseInt(prompt("Enter the number of flats on a story:"));
while (!okInput(flatsPerStory)) {
	flatsPerStory = parseInt(prompt("Incorrect input, try again:"));
}
var flatNo = parseInt(prompt("Enter the flat number:"));
while (!okInput(flatNo)) {
	flatNo = parseInt(prompt("Incorrect input, try again:"));
}

var flatsPerPorch = stories * flatsPerStory / porches;
var i = 1, text = "";
for ( ; i<=porches; i++) {
	if (flatNo < i*flatsPerPorch) {
		text = "The flat is in the " + i + "th porch";
		alert(text);
		break;
	}
}

//function for input type check
function okInput(num) {
	if (!isNaN(num)) {
		return true;
	}
	else {
		return false;
	}
}