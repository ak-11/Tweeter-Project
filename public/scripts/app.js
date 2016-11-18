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

const createTweetElement = function(tweetData) {
  const userName = escape(tweetData.user.name);
  const avatar = escape(tweetData.user.avatars.regular);
  const handle = escape(tweetData.user.handle);
  const content = escape(tweetData.content.text);
  const postDate = tweetData.created_at;
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
//Original Code that Worked
//  let $tweet = $("<article>").addClass("tweet")

// const createTweetElement = function(tweetData) {
//   let userName = tweetData.user.name;
//   let avatar = tweetData.user.avatars.regular;
//   let handle = tweetData.user.handle;
//   let content = tweetData.content.text;
//   let postDate = tweetData.created_at;
//   let $html = `<article>
//                 <header>
//                   <img src=${avatar} alt="avatar photo">
//                   <h2>${userName}</h2>
//                   <h5>${handle}</h5>
//                 </header>
//                 <p>${content}</p>
//                 <footer>
//                 <div>${postDate}
//                   <i class="fa fa-flag" aria-hidden="true"></i>
//                   <i class="fa fa-retweet" aria-hidden="true"></i>
//                   <i class="fa fa-heart" aria-hidden="true"></i>
//                 </div>
//                 </footer>
//               </article>`
//   return $html;
// };

// let data = []

// const renderTweets = function(tweets) {
//   tweets.forEach(function(tweet) {
//     $(".saved-tweets").append(createTweetElement(tweet));
//   })
// }
// $(document).ready(function() {
//   renderTweets(data);
// });