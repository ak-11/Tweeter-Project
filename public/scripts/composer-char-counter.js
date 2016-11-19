"use strict";

$(document).ready(function() {
  $(".tweet-compose-text-area").on("input", function(event) {       //switch keyup to input to allow for deleting without keyup.
    let newTweetCounter = 140 - $(this).val().length;
    $(this).siblings(".counter").
      text(newTweetCounter).
      toggleClass("warning-character-max", newTweetCounter < 0);
  })
});

