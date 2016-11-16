
$(document).ready(function () {
    $("#compose-tweet").on("keyup", function(event) {
      let newTweetCounter = 140 - $(this).val().length;
      $(this).siblings("span.counter").text(newTweetCounter);
        if (newTweetCounter < 0) {
          $("span.counter").addClass("warning-character-max");
        } else {
          $("span.counter").removeClass("warning-character-max");
        }
    })
});
// Remember to use Jquery calls

