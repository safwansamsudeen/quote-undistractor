const API_KEY = "";

// Set visit constants
const onHomePage = ["/", "/webhp"].includes(location.pathname);
let options, visitCount, visitTime, topicIds, TOPICS, PERIODS;
TimeMe.initialize({
    currentPageName: "my-home-page", // current page
    idleTimeoutInSeconds: 5, // stop recording time due to inactivity
});
chrome.storage.sync.get(["topics", "periods"]).then(result => {
    TOPICS = JSON.parse(result.topics || "{}");
    PERIODS = JSON.parse(result.periods || "{}")
    if (!PERIODS || !TOPICS || Object.keys(PERIODS).length === 0) {
        alert("Please configure the extension.")
        throw new Error("Extension not configured");
    }

// Set up topics
    topicIds = getTopics();
    options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "quotel-quotes.p.rapidapi.com",
        },
        body: `{"topicIds":${topicIds}}`
    };


// Get quote
    const quote = localStorage.getItem("quote") || "";
    const author = localStorage.getItem("quote-author") || "";
    const [clippedQuote, rest] = getDivider(quote);

// and add it to DOM
    let logo;
    if (onHomePage) {
        logo = document.querySelector("img[alt='Google']") || document.querySelector("#hplogo").parentElement.parentElement;
    } else {
        logo = document.querySelector('a[href^="https://www.google.com"]')
    }
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("clipped-quote");
    contentHolder.textContent = clippedQuote;
    logo.parentElement.append(contentHolder);

    if (!onHomePage) {
        contentHolder.innerHTML = `<a href='https://google.com'>${contentHolder.textContent}</a>`;
    }

// Display rest of the quote only if on home page
    if (onHomePage) {
        let visibleCenter = document.querySelectorAll("center")[1];
        let restHolder = document.createElement("div");
        restHolder.classList.add("rest");
        restHolder.textContent = rest;
        visibleCenter.prepend(restHolder);
    }

// Get statistics
    const epoch = new Date(null);
    const dayId = Math.ceil((now - epoch) / (1000 * 60 * 60 * 24));
    const day = parseInt(localStorage.getItem("last-day"));
    visitCount = 0;
// visitTime is a string as toFixed returns a String
    visitTime = "0.00";
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
        let holder = document.createElement("div");
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
            parseFloat(visitTime) + TimeMe.getTimeOnCurrentPageInSeconds() / 60
        );
    };
// Download next quote asynchronously if user has read this quote
    if (onHomePage) {
        setNextQuote()
    }
})
