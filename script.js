
$(function () {
  $(".saveBtn").on("click", function () { //listener for click events on the save button.
    console.log($(this).siblings("textarea").val());
    var keyId = $(this).parent().attr("id");
    var toDo = $(this).siblings("textarea").val();
    localStorage.setItem(keyId, toDo); // the toDo is stored into keyId var as local storage
  });
  
  $(".time-block").each(function (index) { //uses time-block element in id as a key to save user input in localst
    console.log($(this));
    var keyId = $(this).attr("id");  // note - keyId is reusable in separate functions.
    $(this).children("textarea").val(localStorage.getItem(keyId)) // retreives user input keyId from localst
  });

  $(".time-block").each(function (index) {
    console.log($(this).attr("id"));
    var thisHour = $(this).attr("id").split("-")[1];
    console.log(thisHour);
    console.log(dayjs().hour());
    if (parseInt(thisHour) < dayjs().hour()) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    if (parseInt(thisHour) == dayjs().hour()) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }
    if (parseInt(thisHour) > dayjs().hour()) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });

  $("#currentDay").text(dayjs().format("dddd MMM DD, YYYY"))
});

