// Config options
const timeDiv = document.getElementById("pos-topLeft");
const showSeconds = true;
const twentyFourHourClock = false;

// Actual Code
var date = new Date();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayList[date.getDay()];
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthList[date.getMonth()];
var year = date.getFullYear();
var dateNumb = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var dateWrite = day + ', ' + month + ' ' + dateNumb + ', ' + year;
var timeWrite = hours + ":" + minutes;

var fonts = document.createElement('link');
fonts.href = "<link href=\"https://fonts.googleapis.com/css?family=Lato|Open+Sans:300&display=swap\" rel=\"stylesheet\">";
fonts.rel = "stylesheet";
document.head.appendChild(fonts);

var dateText = document.createElement("h1"); dateText.id = "dateTime";
timeDiv.appendChild(dateText);
var timeText = document.createElement("h1"); timeText.id = "timeText";
timeDiv.appendChild(timeText);

update();

function update() {
    date = new Date();
    dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = dayList[date.getDay()];
    monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = monthList[date.getMonth()];
    year = date.getFullYear();
    dateNumb = date.getDate();
    hours = (twentyFourHourClock? date.getHours():(date.getHours()>12?date.getHours()-12:(date.getHours()===0?12:date.getHours())));
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    var timeString = hours+":"+(minutes>9?minutes:"0"+minutes)+(showSeconds?":"+(seconds>9?seconds:"0"+seconds):"")+(twentyFourHourClock?"":(date.getHours()>11?"PM":"AM"));
    timeText.innerHTML = "";
    timeText.appendChild(document.createTextNode(timeString));
    var dateString = day+", " + month + " " + dateNumb+", "+ year;
    dateText.innerHTML = "";
    dateText.innerHTML = dateString;
    setTimeout(arguments.callee, 10); // Loop every 10 milliseconds
}


