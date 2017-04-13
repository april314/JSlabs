var i = parseInt(prompt("Enter i:"));
while (!okInput(i)) {
	i = parseInt(prompt("Wrong input, enter again:"));
}

alert(Fibonacci(i));

//function for input type check
function okInput(num) {
	if (!isNaN(num)) {
		return true;
	}
	else {
		return false;
	}
}
//Fib function
function Fibonacci(num) {
	var Fib1 = 1, Fib2 = 0,
    	c = 1, Fib3 = 0;
	for ( ; c<=num; ++c) {
		Fib3 = Fib1 + Fib2;
		Fib1 = Fib2;
		Fib2 = Fib3;
	}
	return Fib3;
}