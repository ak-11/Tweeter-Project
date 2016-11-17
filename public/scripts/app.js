"use strict";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  let $tweet = $("<article>").addClass("tweet")

const createTweetElement = function(tweetData) {
  let userName = tweetData.user.name;
  let avatar = tweetData.user.avatars.regular;
  let handle = tweetData.user.handle;
  let content = tweetData.content.text;
  let postDate = tweetData.created_at;
  let $html = `<article>
                <header>
                  <img src=${avatar} alt="avatar photo">
                  <h2>${userName}</h2>
                  <h5>${handle}</h5>
                </header>
                <p>${content}</p>
                <footer>
                <div>${postDate}
                  <i class="fa fa-flag" aria-hidden="true"></i>
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                </footer>
              </article>`
  return $html;
};
    // $(".saved-tweets").append($html);
// Fake data taken from tweets.json
// var data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];
let data = []

const renderTweets = function(tweets) {
  tweets.forEach(function(tweet) {
    $(".saved-tweets").append(createTweetElement(tweet));
  })
}
$(document).ready(function() {
  renderTweets(data);
});