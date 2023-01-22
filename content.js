/* HEADS UP: This is the section you should modify - read the instructions for more detail */
const API_KEY = "7c3f02b150msh6c7e71d55db7657p19511fjsne90d8afc3de6"; // Set the API key here

const TOPICS = {
  work: [75],
  children: [79, 54],
  lunch: [23, 96],
  browsing: [91, 112],
};

const PERIODS = {
  children: [
    [8, 12],
    [14, 20],
  ],
  work: [[21, 22]],
  lunch: [[13, 14]],
  browsing: [[6, 7]],
};
/* END OF USER MODIFICATION */


// Set visit constants
const onHomePage = ["/", "/webhp"].includes(location.pathname);

// Set up topics
const topicIds = getTopics();
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "quotel-quotes.p.rapidapi.com",
  },
  body: `{"topicIds":${topicIds}}`,
};

// Get quote
const quote = localStorage.getItem("quote") || "";
const author = localStorage.getItem("quote-author") || "";
const [clippedQuote, rest] = getDivider(quote);

// and add it to DOM
let logo = document.querySelector("img[alt='Google']");
contentHolder = document.createElement("div");
contentHolder.classList.add("clipped-quote");
contentHolder.textContent = clippedQuote;
logo.parentElement.append(contentHolder);

if (!onHomePage) {
  contentHolder.innerHTML = `<a href='https://google.com'>${contentHolder.textContent}</a>`;
}

// Display rest of the quote only if on home page
if (onHomePage) {
  let visibleCenter = document.querySelectorAll("center")[1];
  restHolder = document.createElement("div");
  restHolder.classList.add("rest");
  restHolder.textContent = rest;
  visibleCenter.prepend(restHolder);
}

// Download next quote asynchronously if user has read this quote
if (onHomePage) {
  setNextQuote();
}
