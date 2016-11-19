"use strict";

$(document).ready(function() {
  $(".tweet-compose-text-area").on("keyup", function(event) {
    let newTweetCounter = 140 - $(this).val().length;
    $(this).siblings(".counter").
      text(newTweetCounter).
      toggleClass("warning-character-max", newTweetCounter < 0);
  })
});

