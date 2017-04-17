//part TWO - a decorator for function with any number of parameters checking for optional type
// the decorator for f
function typeCheck(f, type) {
  return function() {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != type) {
        alert( "Wrong argument " + i );
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function two(a, b) {
  return a + b;
}

function three(a,b,c) {
	return a + b - c;
}

function four(a,b) {
	return a + b;
}

//applying the decorator
two = typeCheck(two, "number");
alert( two(3, 2) );
two(true, null);
two(1, ["array", "in", "two?!?"]);

three = typeCheck(three, "number");
alert( three(3, 2, 4) );
three(true, null, "yes");
three(1, ["array", "in", "three?!?"], 3);

four = typeCheck(four, "string");
alert( four("Hello ", "world"));
four(2,"hi");
four("2", false);