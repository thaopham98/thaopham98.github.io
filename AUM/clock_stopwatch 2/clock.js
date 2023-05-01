"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Converting 24hr to 12hr
    var ampm = "AM";
    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(minutes);
    $("seconds").firstChild.nodeValue = padSingleDigit(seconds);
    $("ampm").firstChild.nodeValue = ampm;
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds >= 1000){
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedMinutes >= 60){
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }
    //display new stopwatch time
    $("s_minutes").firstChild.nodeValue = padSingleDigit(elapsedMinutes);  
    $("s_seconds").firstChild.nodeValue = padSingleDigit(elapsedSeconds);
    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;
};

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // do first tick of stop watch and then set interval timer to tick 
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    if (stopwatchTimer != null){
        return;
    }
    stopwatchTimer = setInterval(tickStopwatch, 10);
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    stopStopwatch = null;
};

var resetStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
    stopStopwatch = null;
    // reset elapsed variables and clear stopwatch display
    elapsedMilliseconds = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    $("s_minutes").firstChild.nodeValue = padSingleDigit(elapsedMinutes);  
    $("s_seconds").firstChild.nodeValue = padSingleDigit(elapsedSeconds);
    $("s_ms").firstChild.nodeValue = "000";
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
    $("start").onclick = startStopwatch;
    $("stop").onclick = stopStopwatch;
    $("reset").onclick = resetStopwatch;
};