function getQuote() {
  var requestURL = 'https://schatto1.github.io/RandomQuoteMachine/quotes.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var quotes = request.response;

    var current = Math.floor(Math.random() * quotes.length);

    // Replace quote text and author
    $(".quote").html(quotes[current]['quoteText']);
    if (quotes[current]['quoteAuthor'] === "") {
      $(".author").html("Unknown");
    } else {
      $(".author").html(quotes[current]['quoteAuthor']);
    }

    // Replace learn more button address with new author
    $(".learnMore").attr('href', 'https://www.google.com/search?q=' + quotes[current]['quoteAuthor'])
  }
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", getQuote);
});