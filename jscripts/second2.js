/*//part ONE - a decorator for one-parameter function to check for "number"
//the decorator for f
function typeCheck(f) {
  return function() {
    if (typeof arguments[0] != 'number') {
        alert( "Wrong argument" );
        return;
      }
    return f.apply(this, arguments);
  }
}

function fun(a) {
  return a;
}

// applying decorator for fun
fun = typeCheck(fun);
// okay
alert( fun(2) ); // 2, all right

// errors
fun(true); // Wrong argument
fun(["array", "in", "fun?!?"]); // Wrong argument
*/

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

applying the decorator
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