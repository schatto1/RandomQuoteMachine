var requestURL = 'https://schatto1.github.io/RandomQuoteMachine/quotes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

$(document).ready(function() {
  $("#getQuote").on("click", function(){
    $(".quote").html("Here is the message");
  });
});