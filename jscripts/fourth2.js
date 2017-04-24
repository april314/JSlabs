function Task(name,descr,beg,end,subtasks) {
	this.name = name;
	this.descr = descr;
	this.beg = beg;
	this.end = end;
	this.subtasks = subtasks || [];
}

Task.prototype.toString = function() {
	var text = "";
	text += "Name: " + this.name + "<br>Description: " + this.descr +
		"<br>Began: " + this.beg + "<br>Ended: " + this.end +
		"<br>Subtasks: " + this.subtasks;
	return text;
};

function ActiveTask(name,descr,beg,end,subtasks,percent,done) {
	this.name = name;
	this.descr = descr;
	this.beg = beg;
	this.end = end;
	this.subtasks = subtasks || [];
	this.percent = percent;
	this.done = done;
}

ActiveTask.prototype = new Task();
ActiveTask.prototype.constructor = ActiveTask;

ActiveTask.prototype.toString = function() {
	var text = Task.prototype.toString.call(this);
    text += "<br>Progress: " + this.percent + "%<br>Status: " + this.done;
    return text;
};

//main function
function inheritance() {
	var time = new Date();
	var task = new Task("Monitoring", "Looking back at you (yes I am)", 
		"" + time.getHours() + ":" + time.getMinutes(), "-", ["none"]);
	document.getElementById('inher1').innerHTML = task.toString();

	var acttask = new ActiveTask("Cleaning", "Polishing your files and dusting your precious folders",
		"1997", "never", ["scrubbing", "dusting", "mopping", "polishing"], 77, "running");
	document.getElementById('inher2').innerHTML = acttask.toString();
}