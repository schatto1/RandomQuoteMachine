function getQuote() {
  var requestURL = 'https://schatto1.github.io/RandomQuoteMachine/quotes.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var quotes = request.response;

    var current = Math.floor(Math.random() * quotes.length);
    var currentQuote = quotes[current]['quoteText'];
    var currentAuthor = quotes[current]['quoteAuthor'];

    // Replace quote text and author
    $(".quote").html(currentQuote);
    if (currentAuthor === "") {
      $(".author").html("Unknown");
    } else {
      $(".author").html(currentAuthor);
    }

    // Replace learn more button address with new author
    $("#learnMore").attr('href', 'https://www.google.com/search?q=' + currentAuthor)

    // Allow user to tweet current quote
    $("#tweetQuote").attr('href', 'https://twitter.com/intent/tweet?hashtags=quote,freeCodeCamp&related=freeCodeCamp&text="' + currentQuote + '" -' + currentAuthor);
  }
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", getQuote);
});