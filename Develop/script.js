var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

var date = new Date();
var day = date.getDay();
document.getElementById("currentDay").innerHTML = weekdays[day];
console.log(weekdays[day]);