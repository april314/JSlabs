function range(beg, end, step) {
	beg = parseInt(beg);
	end = parseInt(end);
	step = parseInt(step);

	if (isNaN(step)) {
    	if (beg < end) 
    		step = 1;
    	else if (beg > end)
    		step = -1;
	}

	var numbers = [];

	if (beg < end) {
		var c = beg;
		if (step < 0) //if the user puts in a step with the wrong sign, we will just correct it 
			step *= -1;
		for ( ; c <= end; c += step) {
			numbers.push(c);
		}
	}
	else if (beg > end) {
		var c = beg;
		if (step > 0) //same silent correction
			step *= -1;
		for ( ; c >= end; c += step) {
			numbers.push(c);
		}
	}

	document.getElementById('demo1').innerHTML = numbers;
}