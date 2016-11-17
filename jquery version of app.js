Using jQuery API

function createTweetElement(tweetData) {
  var tweetElement = $("<article>").addClass("tweet")
        .append($("<header>")
          .append($("<img>").addClass("user-avatar").attr("src", tweetData.user.avatars.small))
          .append($("<h2>").addClass("user-name").text(tweetData.user.name))
          .append($("<small>").addClass("user-handle").text(tweetData.user.handle))
        )
        .append($("<div>").addClass("body")
          .append($("<p>").text(tweetData.content["text"]))
        )
        .append($("<footer>")
          .append($("<div>"))
            .append($("<i>").addClass("fa fa-flag").attr(aria-hidden="true"))
            .append($("<i>").addClass("fa fa-retweet").attr(aria-hidden="true"))
            .append($("<i>").addClass("fa fa-heart").attr(aria-hidden="true"))
        )
}

                <footer>
                <div>${postDate}
                  <i class="fa fa-flag" aria-hidden="true"></i>
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                </footer>