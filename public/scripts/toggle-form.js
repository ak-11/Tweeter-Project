"use strict";

$(document).ready(function() {
  $(".tweet-compose-button").on("click", function() {
    $(".new-tweet").toggle("display");                //Alternative to toggle, slideToggle.
    $(".tweet-compose-text-area").focus();
  })
  $("#tweet-submit-button").on("click", function() {
    $(".new-tweet").toggle("display");
  })
});

// $(document).ready(function() {
//   $("#tweet-submit-button").on("click", function() {
//     $(".new-tweet").toggle("display");
//   })
// });