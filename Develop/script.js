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
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

})