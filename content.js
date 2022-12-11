/* HEADS UP: This is the section you should modify - read the instructions for more detail */
const API_KEY = ""; // Set the API key here

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

/* Helper functions */
const setNextQuote = async () => {
  // Download a random quote from the API based on options
  const newQuoteRes = await fetch(
    "https://quotel-quotes.p.rapidapi.com/quotes/random",
    options
  );
  const newQuote = await newQuoteRes.json();
  // Set to LocalStorage
  if (!newQuote.quote) {
    alert("An error occured, please check the console");
    console.log(newQuote);
    return;
  }
  localStorage.setItem("quote", newQuote.quote);
  localStorage.setItem("quote-author", newQuote.name);
};

function getDivider(quote) {
  // Divide a quote by the first word break after the 25th character
  let i = 25;

  let c = quote[i];
  while (![" "].includes(c) && i < quote.length) {
    c = quote[i + 1];
    i++;
  }

  let clippedQuote = quote.slice(0, i);
  let rest = quote.slice(i, quote.length);

  return [clippedQuote, rest];
}

const getStatsStatement = () => {
  if (onHomePage) {
    return `You've visited <span class="standout">${visitCount}</span> time${
      visitCount !== 1 ? "s" : ""
    } today, spending <span class="standout">${visitTime}</span> minute${
      visitTime !== "1.00" ? "s" : ""
    }. Was it really worth it?`;
  } else {
    return `<span class="standout">${visitCount}</span>t, <span class="standout">${visitTime}</span>m`;
  }
};

const getTopics = () => {
  let h = now.getHours();

  let periods = [];
  for (let [period, time] of Object.entries(PERIODS)) {
    for (hourPeriod of time) {
      if (hourPeriod[0] <= h && h < hourPeriod[1]) {
        periods.push(period);
      }
    }
  }

  let topicIds = [];
  for (let period of periods) {
    topicIds = topicIds.concat(TOPICS[period]);
  }
  return JSON.stringify(topicIds);
};

/* Functionality */
// Set visit constants
const onHomePage = ["/", "/webhp"].includes(location.pathname);
const now = new Date();

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
let logo = document.querySelector("img");
// fix a bug related to when a Google Doodle would appear instead of the logo
if (logo.alt !== "Google") {
  logo = logo.parentElement.parentElement;
}
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

// Get statistics
let dayId = Math.floor(now / 8.64e7);

const day = parseInt(localStorage.getItem("last-day"));
let visitCount = 0;
let visitTime = 0.0;
if (day && day === dayId) {
  visitCount = parseInt(localStorage.getItem("visit-count")) || 0;
  visitTime =
    parseFloat(localStorage.getItem("visit-time")).toFixed(2) || "0.00";
}

// Report stats
let stats = document.createElement("div");
stats.classList.add("stats");
stats.innerHTML = getStatsStatement();

if (onHomePage) {
  stats.innerHTML += `<div class="author">Quote from ${author}</div>`;
  logo.parentElement.parentElement.prepend(stats);
} else {
  stats.classList.add("stats-small");
  holder = document.createElement("div");
  holder.append(stats);
  holder.append(contentHolder);
  logo.parentElement.prepend(holder);
  logo.remove();
}

/* Work for next visit */
// Update stats before window unloads
window.onbeforeunload = () => {
  localStorage.setItem("last-day", dayId);
  localStorage.setItem("visit-count", visitCount + 1);
  localStorage.setItem(
    "visit-time",
    parseFloat(visitTime) + (Date.now() - now) / 60000
  );
};

// Download next quote asynchronously if user has read this quote
if (onHomePage) {
  setNextQuote();
}
