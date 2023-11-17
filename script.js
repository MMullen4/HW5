// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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
    console.log($(this));
    

  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $("#currentDay").text(dayjs().format("dddd MMM DD, YYYY"))
});
