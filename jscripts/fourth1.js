function Vector(x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

Vector.prototype.plus = function(rv) {
	var nx, ny, nz;
	nx = this.x + rv.x;
	ny = this.y + rv.y;
	nz = this.z + rv.z;
	var nv = new Vector(nx,ny,nz);
	return nv;
};

Vector.prototype.scalar = function(rv) {
	var t = "The dot (scalar) product of the two vectors is ";
	t += this.x * rv.x + this.y * rv.y + this.z * rv.z;
	return t;
};

Vector.prototype.toString = function() {
	var vec = "The new resulting vector (sum) is ";
	vec += "(" + this.x + "," + this.y + "," + this.z + ")";
	return vec;
};

Vector.prototype.valueOf = function() {
	//to tell you the truth I didn't make up any definition that wouldn't be exactly 
	//like that of toString()...
	//what is a primitive value for a Vector? I do not know, so I return a string representation...
	var vecVal = "";
	vecVal = "(" + this.x + "," + this.y + "," + this.z + ")";
	return vecVal;
};

//вот это у меня естественно не получилось (добавить в прототип)
// Object.prototype.defineProperty(Vector, "length", {
//     value: Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z),
//     writable: false
// });

//main function
function doEverything() {
	var v1 = 
		new Vector(parseInt(document.getElementById('x1').value),
		parseInt(document.getElementById('y1').value),
		parseInt(document.getElementById('z1').value));
	var v2 = 
		new Vector(parseInt(document.getElementById('x2').value),
		parseInt(document.getElementById('y2').value),
		parseInt(document.getElementById('z2').value));
	var sv = v1.plus(v2)
	document.getElementById('vector1').innerHTML = sv.toString();
	document.getElementById('vector2').innerHTML = v1.scalar(v2);

	//а вот это - вполне, но тогда для каждого объекта ее нужно добавлять отдельно, 
	//иначе - undefined
	try { 
		Object.defineProperty(v1, "length", {
		    value: Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z),
		    writable: false
		});
	}
	catch(err) {
		console.log(err);
	}
	document.getElementById('vector3').innerHTML = "Length of the 1st vector is " + v1.length 
		+ "<br>The length of the 2nd vector is " + v2.length;
}