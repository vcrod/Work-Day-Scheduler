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

})