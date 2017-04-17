//part ONE - a decorator for one-parameter function to check for "number"
//the decorator for f
function type1Check(f) {
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
fun = type1Check(fun);
alert( fun(2) );
fun(true);
fun(["array", "in", "fun?!?"]);