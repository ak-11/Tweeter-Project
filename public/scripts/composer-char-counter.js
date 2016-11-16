
$(document).ready(function() {
  $("#compose-tweet").on("keyup", function(event) {
    let newTweetCounter = 140 - $(this).val().length;
    $(this).siblings(".counter").
      text(newTweetCounter).
      toggleClass("warning-character-max", newTweetCounter < 0);
  })
});

