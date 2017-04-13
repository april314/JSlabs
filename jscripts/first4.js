var month = parseInt(prompt("Enter the month's number (1-12):"));
while (!okInput(month)) {
	month = parseInt(prompt("Wrong input, should be (1-12):"));
}
var day = parseInt(prompt("Enter the day's number (1-31):"));
while (!okInput(day)) {
	day = parseInt(prompt("Wrong input, should be (1-31):"));
}
//instead of 2015 we use the current year
var currentDate = new Date();
var year = currentDate.getFullYear();
var date = new Date(year,month-1,day);
//for giving the days their actual names
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
alert(days[date.getDay()]);

//function for input type check
function okInput(num) {
	if (!isNaN(num)) {
		return true;
	}
	else {
		return false;
	}
}