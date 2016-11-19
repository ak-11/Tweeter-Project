"use strict";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const dateConversion = function (postDate) {
  let today = Date.now();
  let millisecondsInDay = 86400000;
  let difference = (today - postDate)/millisecondsInDay;
  let result = Math.floor(difference);
  return (`${result} days ago`);
};

const createTweetElement = function(tweetData) {
  const userName = escape(tweetData.user.name);
  const avatar = escape(tweetData.user.avatars.small);
  const handle = escape(tweetData.user.handle);
  const content = escape(tweetData.content.text);
  const postDate = dateConversion(tweetData.created_at);
  const $html = `<article>
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

let data = [];

const renderTweets = function(tweets) {
  $(".saved-tweets").empty();
  // $ sort function here
  // tweets.sort(function(x, y) {
  //   return tweetData.created_at - tweetData.created_at;
  // })
  $.each(tweets, function(i, tweet) {
    $(".saved-tweets").prepend(createTweetElement(tweet));
  })
};

$(document).ready(function() {
  let tweetForm = $("#compose-new-tweet");

  tweetForm.on("submit", (event) => {
    event.preventDefault();
    const tweetContent = $(this).find("textarea").val();
    if (tweetContent === "") {
      alert("It looks like you forgot to type a tweet");
    } else if (tweetContent.length > 140) {
      alert("You tried to type too many words!");
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: tweetForm.serialize(),
        }).done(function(result) {
          loadTweets(result);
          tweetForm.find("textarea").val("");
      })
    }
  })

  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: renderTweets
    });
  };
  loadTweets();
});