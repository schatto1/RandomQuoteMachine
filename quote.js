function getQuote() {
  var requestURL = 'https://schatto1.github.io/RandomQuoteMachine/quotes.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var quotes = request.response;

    var current = Math.floor(Math.random() * quotes.length);

    $(".quote").html(quotes[current]['quoteText']);
    if (quotes[current]['quoteAuthor'] === "") {
      $(".author").html("Unknown");
    } else {
      $(".author").html(quotes[current]['quoteAuthor']);
    }
  }
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", getQuote);
});