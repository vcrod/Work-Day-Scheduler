//var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//var date = ["1", "2", "3", "4", "5", "6", "7", "8," "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

// var date = new Date();
// var day = date.getDay();
// document.getElementById("currentDay").innerHTML = weekdays[day];


// var date = date.getDate();
// document.getElementById("currentDay").innerHTML = date.get.date();
// console.log(weekdays[day]);

$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do"))

  $(".saveBtn").on("click", function () {
    console.log("testing");
    var textValue = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");
    console.log(textValue, id);

    localStorage.setItem(id, textValue);
  })

  // color
  function color() {
    var currentTime = moment().hours()
    console.log(currentTime);

    $(".time-block").each(function () {
      var block = parseInt($(this).attr("id"))
      if (block < currentTime) {
        $(this).addClass("past");
      } else if (block > currentTime) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    })

  }
  color();
  // get info local storage - repeat for hour blocks
  $("#9 .description").val(localStorage.getItem("9"))
})