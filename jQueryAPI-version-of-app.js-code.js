Using jQuery API

createTweetElement = function (tweetData) {
  var tweetElement = $("<article>").addClass("tweet")
        .append($("<header>")
          .append($("<img>").addClass("user-avatar").attr("src", tweetData.user.avatars.small))
          .append($("<h2>").addClass("user-name").text(tweetData.user.name));
          .append($("<small>").addClass("user-handle").text(tweetData.user.handle));
        )
        .append($("<div>").addClass("tweet-body")
          .append($("<p>").text(tweetData.content["text"]))
        );
        .append($("<footer>").addClass("tweet-footer")
          .append($("<div>").addClass("tweet-post-date").text(tweetData.created_at)
            .append($("<i>").addClass("fa fa-flag").attr(aria-hidden="true"))
            .append($("<i>").addClass("fa fa-retweet").attr(aria-hidden="true"))
            .append($("<i>").addClass("fa fa-heart").attr(aria-hidden="true"))
          )
        );
};

