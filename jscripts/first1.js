var a, b;
do {
	a = parseInt(prompt("Enter a:"));
	b = parseInt(prompt("Enter b:"));
	if (isNaN(a)) {
		alert("a is not a number");
		break;
	}
	else if (isNaN(b)) {
		alert("b is not a number");
		break;
	}
	else {
		if (a < b) {
			alert("a < b");
		}
		else if (a == b) {
			alert("a = b");
		}
		else {
			alert("a > b");
		}
	}
} while (true);