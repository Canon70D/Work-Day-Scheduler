//Thanks for the share from Ben Smerd, the moment.js method is really useful
var todayTime = moment().format("dddd, MMMM Do");

//time display on top of page
$("#currentDay").text(todayTime);

// every hour by moment.js
var am9 = moment().hour(9);
var am10 = moment().hour(10);
var am11 = moment().hour(11);
var pm12 = moment().hour(12);
var pm1 = moment().hour(13);
var pm2 = moment().hour(14);
var pm3 = moment().hour(15);
var pm4 = moment().hour(16);
var pm5 = moment().hour(17);
var pm6 = moment().hour(18);

var workHour = [am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5]; 

//time block from 9am - 5pm
for (var i=0; i < workHour.length; i++) {
    var formRow = $("<div>").addClass("row");
    var formBlock = $("<text-area>").text(workHour[i].format("hA")).addClass("hour");
    var inputCol = $("<input>").attr("placeholder", "").addClass("dayNote time-block");
    saveBtn = $("<button>").addClass("btn btn-primary fas fa-save saveBtn");
    $(formRow).append(formBlock).append(inputCol).append(saveBtn);
    $("#calendar").append(formRow);
}

//input ID setup
function inputIDcheck() {
    var inputId = document.getElementsByClassName("dayNote");
    for (var i = 0; i < inputId.length; i++) {
      inputId[i].id = "inputIDcheck" + (i + 1);
    }
  };
  inputIDcheck();

//save button ID setup
function saveBtnIDcheck() {
    var saveBtnId = document.getElementsByClassName("saveBtn");
    for (var i = 0; i < saveBtnId.length; i++) {
      saveBtnId[i].id = "saveBtnIDcheck" + (i + 1);
    }
  }
  saveBtnIDcheck();

//var created to access new created html element
var save1 = $("#saveBtnIDcheck1");
var save2 = $("#saveBtnIDcheck2");
var save3 = $("#saveBtnIDcheck3");
var save4 = $("#saveBtnIDcheck4");
var save5 = $("#saveBtnIDcheck5");
var save6 = $("#saveBtnIDcheck6");
var save7 = $("#saveBtnIDcheck7");
var save8 = $("#saveBtnIDcheck8");
var save9 = $("#saveBtnIDcheck9");

var input1 = $("#inputIDcheck1");
var input2 = $("#inputIDcheck2");
var input3 = $("#inputIDcheck3");
var input4 = $("#inputIDcheck4");
var input5 = $("#inputIDcheck5");
var input6 = $("#inputIDcheck6");
var input7 = $("#inputIDcheck7");
var input8 = $("#inputIDcheck8");
var input9 = $("#inputIDcheck9");

// flash a message when note added
function alert() {
    var str = "\u2713";
    var notice = $("<p>").text("Appointment Added to localStorage" + " "+ str).addClass("noticeDisplay");
    $("#calendar").prepend(notice);

    setTimeout(function(){
        notice.remove();
    }, 1500);
}
  
//set click event for every time block
//can probably use JSON.stringify() to make few lines short
$(save1).on("click", function (event) {
    event.preventDefault();

    alert();
    
    input1 = $("#inputIDcheck1").val().trim();
    localStorage.setItem("note1", (input1));
});
var savedNote1 = (localStorage.getItem("note1"));
input1.val(savedNote1);

$(save2).on("click", function (event) {
    event.preventDefault();

    alert();

    input2 = $("#inputIDcheck2").val().trim();
    localStorage.setItem("note2", (input2));
});
var savedNote2 = (localStorage.getItem("note2"));
input2.val(savedNote2);

$(save3).on("click", function (event) {
    event.preventDefault();

    alert();
    
    input3 = $("#inputIDcheck3").val().trim();
    localStorage.setItem("note3", (input3));
});
var savedNote3 = (localStorage.getItem("note3"));
input3.val(savedNote3);

$(save4).on("click", function (event) {
    event.preventDefault();

    alert();

    input4 = $("#inputIDcheck4").val().trim();
    localStorage.setItem("note4", (input4));
});
var savedNote4 = (localStorage.getItem("note4"));
input4.val(savedNote4);

$(save5).on("click", function (event) {
    event.preventDefault();

    alert();

    input5 = $("#inputIDcheck5").val().trim();
    localStorage.setItem("note5", (input5));
});
var savedNote5 = (localStorage.getItem("note5"));
input5.val(savedNote5);

$(save6).on("click", function (event) {
    event.preventDefault();

    alert();

    input6 = $("#inputIDcheck6").val().trim();
    localStorage.setItem("note6", (input6));
});
var savedNote6 = (localStorage.getItem("note6"));
input6.val(savedNote6);

$(save7).on("click", function (event) {
    event.preventDefault();

    alert();

    input7 = $("#inputIDcheck7").val().trim();
    localStorage.setItem("note7", (input7));
});
var savedNote7 = (localStorage.getItem("note7"));
input7.val(savedNote7);

  $(save8).on("click", function (event) {
    event.preventDefault();

    alert();

    input8 = $("#inputIDcheck8").val().trim();
    localStorage.setItem("note8", (input8));
});
var savedNote8 = (localStorage.getItem("note8"));
input8.val(savedNote8);

$(save9).on("click", function (event) {
    event.preventDefault();

    alert();

    input9 = $("#inputIDcheck9").val().trim();
    localStorage.setItem("note9", (input9));
});
var savedNote9 = (localStorage.getItem("note9"));
input9.val(savedNote9);

//compare current time to time block, decide past, present or futuren, display color based on class name
var timeDisplay = function() {
    if (moment().isBetween(am9, am10)) {
        $("#inputIDcheck1").addClass("present");
    }
    else if (moment().isAfter(am10)) {
        $("#inputIDcheck1").addClass("past");
    }
    else {
        $("#inputIDcheck1").addClass("future");
    }

    if (moment().isBetween(am10, am11)) {
        $("#inputIDcheck2").addClass("present");
    }
    else if (moment().isAfter(am11)) {
        $("#inputIDcheck2").addClass("past");
    }
    else {
        $("#inputIDcheck2").addClass("future");
    }

    if (moment().isBetween(am11, pm12)) {
        $("#inputIDcheck3").addClass("present");
    }
    else if (moment().isAfter(pm12)) {
        $("#inputIDcheck3").addClass("past");
    }
    else {
        $("#inputIDcheck3").addClass("future");
    }

    if (moment().isBetween(pm12, pm1)) {
        $("#inputIDcheck4").addClass("present");
    }
    else if (moment().isAfter(pm1)) {
        $("#inputIDcheck4").addClass("past");
    }
    else {
        $("#inputIDcheck4").addClass("future");
    }

    if (moment().isBetween(pm1, pm2)) {
        $("#inputIDcheck5").addClass("present");
    }
    else if (moment().isAfter(pm2)) {
        $("#inputIDcheck5").addClass("past");
    }
    else {
        $("#inputIDcheck5").addClass("future");
    }

    if (moment().isBetween(pm2, pm3)) {
        $("#inputIDcheck6").addClass("present");
    }
    else if (moment().isAfter(pm3)) {
        $("#inputIDcheck6").addClass("past");
    }
    else {
        $("#inputIDcheck6").addClass("future");
    }

    if (moment().isBetween(pm3, pm4)) {
        $("#inputIDcheck7").addClass("present");
    }
    else if (moment().isAfter(pm4)) {
        $("#inputIDcheck7").addClass("past");
    }
    else {
        $("#inputIDcheck7").addClass("future");
    }

    if (moment().isBetween(pm4, pm5)) {
        $("#inputIDcheck8").addClass("present");
    }
    else if (moment().isAfter(pm5)) {
        $("#inputIDcheck8").addClass("past");
    }
    else {
        $("#inputIDcheck8").addClass("future");
    }

    if (moment().isBetween(pm5, pm6)) {
        $("#inputIDcheck9").addClass("present");
    }
    else if (moment().isAfter(pm6)) {
        $("#inputIDcheck9").addClass("past");
    }
    else {
        $("#inputIDcheck9").addClass("future");
    };    
}

//--------------------------------
timeDisplay();