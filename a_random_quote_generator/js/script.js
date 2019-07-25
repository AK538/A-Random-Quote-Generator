/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: "It is that we are never so defenseless against suffering as when we love, never so helplessly unhappy as when we have lost our loved object or its love.",
    source: "Sigmund Freud",
    citation: "Civilization and Its Discontents",
    year: "1930",
    tags: "#Psychology"
  },
  {
    quote: "No tree can grow to Heaven, adds the ever-terrifying Carl Gustav Jung, psychoanalyst extraordinaire, unless its roots reach down to Hell. ",
    source: "Jordan Peterson",
    citation: "12 Rules for Life",
    year: "2018",
    tags: "#Psychology"
  },
  {
    quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
    source: "Carl Jung",
    citation: "Memories, Dreams, Reflectionsy",
    year: "1961",
    tags: "#Psychology"
  },
  {
    quote: "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
    source: "Fyodor Dostoevsky",
    citation: "The Brothers Karamazov",
    year: "1880",
    tags: "#Philosophy"
  },
  {
    quote: "Every form of addiction is bad, no matter whether the narcotic be alcohol, morphine or idealism.",
    source: "Carl Jung",
    citation: "The Undiscovered Self",
    year: "1933",
    tags: "#Psychology"
  },
  {
    quote: "What is most personal is most universal.",
    source: "Carl Rogers",
    citation: "On Becoming a Person",
    year: "1954",
    tags: "#Psychology"
  },
  {
    quote: "a person is a fluid process, not a fixed and static entity; a flowing river of change, not a block of solid material; a continually changing constellation of potentialities, not a fixed quantity of traits.",
    source: "Carl Rogers",
    citation: "On Becoming a Person",
    year: "1954",
    tags: "#Psychology"
  },
  {
    quote: "...we cannot change, we cannot move away from what we are, until we thoroughly accept what we are. Then change seems to come about almost unnoticed.",
    source: "Carl Rogers",
    citation: "On Becoming a Person",
    year: "1954",
    tags: "#Psychology"
  },
]

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  var randomQuote = array[quoteIndex];
  return randomQuote;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var message = "";
  var result = getRandomQuote(quotes);
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  message += "<span class='citation'>" + result.citation + "</span>";
  message += "<span class='year'>" + result.year + "</span>";
  message += "<span class='tags'>" + result.tags + "</span>";
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}
printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.