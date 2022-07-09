//Thanks for the share from Ben Smerd, the moment.js method is really useful
var todayTime = moment().format("dddd, MMMM Do");

// every hour by moment.js
var am9 = moment().hour(9);
var am10 = moment().hour(10);
var am11 = moment().hour(11);
var am12 = moment().hour(12);
var pm1 = moment().hour(13);
var pm2 = moment().hour(14);
var pm3 = moment().hour(15);
var pm4 = moment().hour(16);
var pm5 = moment().hour(17);

//time display on top of page
$("#currentDay").text(todayTime);
