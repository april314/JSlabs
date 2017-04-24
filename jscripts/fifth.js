function move() {
	var elem = document.getElementById("strange-flying-thing");   
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == 300) {
		  clearInterval(id);
		} else {
		  pos++; 
		  elem.style.top = pos + 'px'; 
		  elem.style.left = pos + 'px'; 
		}
	}
}