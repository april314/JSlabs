var matrix = [];
var matr;          //a string for nicer output

function createMatrix(rows,cols) {
	rows = parseInt(rows);
	cols = parseInt(cols);

	var row; matr = ""; 
	var i, j;
	for (j = 0; j < rows; ++j) {
		row = [];
		for (i = 0; i < cols; ++i) {
			row.push(Math.floor(Math.random()*100+1));
		}
		matrix.push(row);
		matr += row + "<br>";
	}
	
	document.getElementById("matrix").innerHTML = matr;
	//enable summ button
	document.getElementById("summ").disabled = false;
	console.log(matrix);
}

//available only after createMatrix was successfully called
//the function can sum the matrix with any matrix, but in this case it first copies the matrix
//from the parameter, and then sums them
function summ() {
	//a new identical matrix to sum it with the first one is created (copy)
	var newmatr = [], newrow;
	var i, len = matrix.length, j, le = matrix[0].length;
	for (i = 0; i < len; ++i) {
		newrow = [];
		 for (j = 0; j < le; ++j) {
		 	newrow.push(matrix[i][j]);
		 }
		 newmatr.push(newrow);
	}
	console.log(newmatr);

	//summing and output
	matr = "";
	for (i = 0; i < len; ++i) {
		for (j = 0; j < le; ++j) {
			newmatr[i][j] += matrix[i][j];
			matr += newmatr[i][j] + ",";
		}
		matr += "<br>";
	}

	document.getElementById("sumresult").innerHTML = matr;
	console.log(newmatr);
}